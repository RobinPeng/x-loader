const Config = require('./loader/config')
const Middleware = require('./loader/middleware')
const Router = require('./loader/router')
const Controller = require('./loader/controller')
const Model = require('./loader/model')
const Service  = require('./loader/service')
const Custom = require('./loader/custom')

class Loader {
    constructor () {
    }

    loadConfig(){
        return new Config().load('../config')
    }

    loadMiddleware(){
        return new Middleware().load()
    }

    loadRouter () {
        return new Router().load()
    }

    loadController () {
        return new Controller().load()
    }

    loadModel(){
        return new Model().load()
    }

    loadService(){
        return new Service().load()
    }

    loadCustom() {
        return new Custom().load()
    }
}

module.exports = Loader