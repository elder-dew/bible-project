const fs = require('fs')

function readDb(dbName = "db.json") {
    const data = fs.readFileSync(dbName, 'utf-8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = "db.json") {
    if(!obj) {return console.log("Please provide data, you goober")}

    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))

        return console.log("Saved successfully :)")
    } catch (error) {
        return console.log("It didn't save :(")
    }
}

module.exports = {readDb, writeDb}