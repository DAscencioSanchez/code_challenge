const Reader = require('./../../lib/utils/Reader');
const StudentServices = require("./../../lib/services/StudentServices");
const StudentController = require("./../../lib/controllers/StudentController");


describe("Tests for StudentController.js", () => {

    test("1. A test for getAllStudents()", () => {
        const manualAllStudents = Reader.readJsonFile("visualpartners.json");
        const allStudents = StudentController.getAllStudents();
        expect(allStudents).toStrictEqual(manualAllStudents);
    });

    test("2. A test for getStudentsByCredits()", () => {
        const students = Reader.readJsonFile("visualpartners.json")
        const manualStudentsByCredits = StudentServices.filterStudentsByCredits(students, 400);
        const studentsByCredit = StudentController.getStudentsByCredits(400);
        expect(manualStudentsByCredits).toStrictEqual(studentsByCredit);
    });

    test("3. A test for getStudentsEmailsByCertification(certification)", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const manualStudentsEmails = StudentServices.getStudentsEmails(students, true);
        const studentEmails = StudentController.getStudentsEmailsByCertification(true)    
        expect(studentEmails).toStrictEqual(manualStudentsEmails);
    });
        
});