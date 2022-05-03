const Reader = require('./../../lib/utils/Reader');
const StudentServices = require("./../../lib/services/StudentServices");
const StudentController = require("./../../lib/controllers/StudentController");

describe("Tests for StudentController.js", () => {

    test("1. A test for getAllStudents()", () => {
        const manualAllStudents = Reader.readJsonFile("visualpartners.json");
        const getAllStudents = StudentController.getAllStudents();
        expect(getAllStudents).toStrictEqual(manualAllStudents);
    });

    test("2. A test forgetStudentsEmailsByCertification", () => {
        const students = Reader.readJsonFile("visualpartners.json")
        const manualStudentsEmails = StudentServices.getStudentsEmails(students, certification);
        const studentEmails = getStudentsEmailsByCertification(certification);
        expect(manualStudentsByCredits).toStrictEqual(studentsByCredit);
    });

    test("3. A test for StudentsEmailsByCertification()", () => {
        const students = Reader.readJsonFile("visualpartners.json")
        const manualStudentsByCredits = StudentServices.filterStudentsByCredits(students, credits);
        const studentsByCredit = StudentController.getStudentsByCredits(400);
        expect(manualStudentsByCredits).toStrictEqual(studentsByCredit);
    });
        
});