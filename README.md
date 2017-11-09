# Make your functions :muscle: resilient and :traffic_light: fail-fast to :poop: failures or :watch: delays

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/hfreire/perseverance.svg?branch=master)](https://travis-ci.org/hfreire/perseverance)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/perseverance/badge.svg?branch=master)](https://coveralls.io/github/hfreire/perseverance?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/hfreire/perseverance.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/github/release/hfreire/perseverance.svg)](https://github.com/hfreire/perseverance/releases)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/perseverance.svg)](https://www.npmjs.com/package/perseverance)
[![Downloads](https://img.shields.io/npm/dt/perseverance.svg)](https://www.npmjs.com/package/perseverance) 

> Add rate limit, retry and circuit-breaker behaviour to your functions.

### Features
* Limits :hand: rate of executions to comply with third-party API limits :white_check_mark: 
* Retries :shit: failing executions in temporary, unexpected system and :boom: network failures :white_check_mark:
* Uses circuit breakers to :traffic_light: fail-fast until it is safe to retry :white_check_mark: 
* Supports [Bluebird](https://github.com/petkaantonov/bluebird) :bird: promises :white_check_mark:

### How to install
```
npm install perseverance
```

### Used by
* [request-on-steroids](https://github.com/hfreire/request-on-steroids) - An HTTP client :sparkles: with retry, circuit-breaker and tor support :package: out-of-the-box
