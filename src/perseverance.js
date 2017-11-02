/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const _ = require('lodash')
const Promise = require('bluebird')
const retry = require('bluebird-retry')
const Brakes = require('brakes')
const PQueue = require('p-queue')
const { RateLimiter } = require('limiter')

const execFn = function (fn) {
  return fn()
}

const execRateable = function (fn) {
  return this._rate.removeTokensAsync(1)
    .then(() => execFn(fn))
}

const execRetrieable = function (fn) {
  return retry(() => execRateable.bind(this)(fn), _.get(this._options, 'retry'))
}

const execBreakable = function (fn) {
  return this._circuitBreaker.exec(fn)
}

const execQueueable = function (fn) {
  return new Promise((resolve, reject) => {
    return this._queue.add(() => {
      return execBreakable.bind(this)(fn)
        .then(resolve)
        .catch(reject)
    })
  })
}

const defaultOptions = {
  retry: { max_tries: 3, interval: 1000, timeout: 3000, throw_original: true },
  breaker: { timeout: 12000, threshold: 80, circuitDuration: 30000 },
  rate: {
    executions: 1,
    period: 250,
    queue: { concurrency: 1 }
  }
}

class Perseverance {
  constructor (options = {}) {
    this._options = _.defaultsDeep(options, defaultOptions)

    this._circuitBreaker = new Brakes(execRetrieable.bind(this), _.get(this._options, 'breaker'))

    this._rate = Promise.promisifyAll(new RateLimiter(_.get(this._options, 'rate.executions'), _.get(this._options, 'rate.period')))
    this._queue = new PQueue(_.get(this._options, 'rate.queue'))
  }

  get circuitBreaker () {
    return this._circuitBreaker
  }

  exec (fn) {
    return Promise.try(() => {
      if (!_.isFunction(fn)) {
        throw new Error('invalid arguments')
      }
    })
      .then((options) => execQueueable.bind(this)(fn))
  }
}

module.exports = Perseverance
