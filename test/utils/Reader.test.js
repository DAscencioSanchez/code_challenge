const fs = require("fs");
const Reader = require("./../../lib/utils/Reader");

describe("Tests for Reader.js", () => {

    test("1. A test for JSON file Reader with a dummy.json", () => {
        const students = Reader.readJsonFile("dummy.json");
        const rawdata = fs.readFileSync("dummy.json");
        const manualReadStudents = JSON.parse(rawdata);
        expect(students).toStrictEqual(manualReadStudents);
    });

    test("2. A test for JSON file Reader with visualpartners.json", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const rawdata = fs.readFileSync("visualpartners.json");
        const manualReadStudents = JSON.parse(rawdata);
        expect(students).toStrictEqual(manualReadStudents);
    });

});