const fs = require("fs");

class Reader {
    static readJsonFile(file) {
        const rawdata = fs.readFileSync(file);
        const students = JSON.parse(rawdata);
        return students
    }
}

module.exports = Reader;