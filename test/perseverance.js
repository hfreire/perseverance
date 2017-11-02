/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable promise/no-callback-in-promise */

describe('Perseverance', () => {
  let subject
  let Brakes

  before(() => {
    Brakes = td.constructor([ 'exec' ])
  })

  afterEach(() => td.reset())

  describe('when constructing', () => {
    beforeEach(() => {
      td.replace('brakes', Brakes)

      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })
  })

  describe('when constructing and loading brakes', () => {
    beforeEach(() => {
      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should create a circuit breaker with slaveCircuit function', () => {
      subject._circuitBreaker.should.have.property('slaveCircuit')
      subject._circuitBreaker.slaveCircuit.should.be.instanceOf(Function)
    })
  })

  describe('when constructing and loading limiter', () => {
    beforeEach(() => {
      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should create a queue with removeTokensAsync function', () => {
      subject._rate.should.have.property('removeTokensAsync')
      subject._rate.removeTokensAsync.should.be.instanceOf(Function)
    })
  })

  describe('when constructing and loading queue', () => {
    beforeEach(() => {
      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should create a queue with add function', () => {
      subject._queue.should.have.property('add')
      subject._queue.add.should.be.instanceOf(Function)
    })
  })

  describe('when executing a function', () => {
    let fn

    before(() => {
      fn = td.function()
    })

    beforeEach(() => {
      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should execute function', () => {
      return subject.exec(fn)
        .then(() => {
          td.verify(fn(), { times: 1 })
        })
    })
  })

  describe('when executing a non-function', () => {
    const fn = {}

    beforeEach(() => {
      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should reject with invalid arguments error', (done) => {
      subject.exec(fn)
        .catch((error) => {
          error.should.be.instanceOf(Error)
          error.message.should.be.equal('invalid arguments')

          done()
        })
    })
  })

  describe('when getting circuit breaker', () => {
    beforeEach(() => {
      td.replace('brakes', Brakes)

      const Perseverance = require('../src/perseverance')
      subject = new Perseverance()
    })

    it('should return a brakes instance', () => {
      subject.circuitBreaker.should.be.instanceOf(Brakes)
    })
  })
})
