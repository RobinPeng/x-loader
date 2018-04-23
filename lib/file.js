const fs = require('fs')
const path = require('path')


class FileLoader {
    constructor (){

    }

    load(dir, options) {
        dir = path.normalize(dir)

        console.log(path.resolve(dir))
        
        if(!fs.existsSync(dir)) {
            throw new Error(`no such file or directory, path '${dir}'`)
        }

        let result = []
        let fileList = fs.readdirSync(dir)
        for(let file of fileList){
            let filePath = path.join(dir, file)
            let stat = fs.statSync(filePath)
            if (stat.isFile()) {
                let fullPath = path.resolve(filePath)
                let obj = require(fullPath)

                result.push({path:fullPath, object: obj, name: filePath})
            } else if (stat.isDirectory()) {
                result = result.concat(this.load(filePath, options))
            }
        }

        return result
    }
}

module.exports = FileLoader