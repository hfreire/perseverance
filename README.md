# Make your functions :muscle: resilient and :traffic_light: fail-fast to :poop: failures or :watch: delays

[![](https://github.com/hfreire/perseverance/workflows/ci/badge.svg)](https://github.com/hfreire/perseverance/actions?workflow=ci)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/perseverance/badge.svg?branch=master)](https://coveralls.io/github/hfreire/perseverance?branch=master)
[![](https://img.shields.io/github/release/hfreire/perseverance.svg)](https://github.com/hfreire/perseverance/releases)
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

### How to contribute
You can contribute either with code (e.g., new features, bug fixes and documentation) or by [donating 5 EUR](https://paypal.me/hfreire/5). You can read the [contributing guidelines](CONTRIBUTING.md) for instructions on how to contribute with code.

All donation proceedings will go to the [Sverige för UNHCR](https://sverigeforunhcr.se), a swedish partner of the [UNHCR - The UN Refugee Agency](http://www.unhcr.org), a global organisation dedicated to saving lives, protecting rights and building a better future for refugees, forcibly displaced communities and stateless people.

### Used by
* [request-on-steroids](https://github.com/hfreire/request-on-steroids) - An HTTP client :sparkles: with retry, circuit-breaker and tor support :package: out-of-the-box
* [facebook-login-for-robots](https://github.com/hfreire/facebook-login-for-robots) - Facebook Login for 🤖 robots

### License
Read the [license](./LICENSE.md) for permissions and limitations.
