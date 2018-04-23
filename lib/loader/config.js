const extend = require('node-extend')

const FileLoader = require('../file')

class Config {
    constructor(options) {
        this.options = Object.assign(options || {}, {env: 'developent'})
    }

    load (path, env) {
        const configs = new FileLoader().load(path)
        for(let config of configs) {
            console.log(config)
        }
    }
}

module.exports = Config