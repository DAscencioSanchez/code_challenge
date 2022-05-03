const StudentServices = require("./../../lib/services/StudentServices");

describe("Tests for StudentServices.js", () => {

    test("1. A test for StudentServices class filterByCertification", () => {
        const students = [{"id": "1","name": "Dianita","credits": 508,"haveCertification": false}, 
        {"id": "2","name": "Rosy","credits": 608,"haveCertification": true}]
        const studentsByCertification = StudentServices.filterByCertification(students, true)
        expect(studentsByCertification).toStrictEqual([{"id": "2","name": "Rosy","credits": 608,"haveCertification": true}]);
    });

    test("2. A test for StudentServices class getStudentsEmails", () => {
        const students = [{"id": "1","name": "Dianita","email": "diana@dummymail.com","credits": 508,"haveCertification": false}, 
        {"id": "2","name": "Rosy","email": "rosy@dummymail.com", "credits": 608,"haveCertification": true}]
        const studentsEmail = StudentServices.getStudentsEmails(students, true)
        expect(studentsEmail).toStrictEqual(["rosy@dummymail.com"]);
    });

    test("3. A test for StudentServices class getStudentsByCredit", () => {
        const students = [{"id": "1","name": "Dianita","email": "diana@dummymail.com","credits": 308,"haveCertification": false}, 
        {"id": "2","name": "Rosy","email": "rosy@dummymail.com", "credits": 608,"haveCertification": true}]
        const studentsByCredits = StudentServices.filterStudentsByCredits(students,400 )
        expect(studentsByCredits).toStrictEqual([{"id": "2","name": "Rosy","email": "rosy@dummymail.com", "credits": 608,"haveCertification": true}]);
    });
    
});