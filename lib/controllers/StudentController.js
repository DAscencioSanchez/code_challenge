const Reader = require('./../../lib/utils/Reader')
const StudentServices = require("./../../lib/services/StudentServices");

class StudentController {
    static getAllStudents() {
        return Reader.readJsonFile("visualpartners.json")
    }

    static getStudentsEmailsByCertification(certification) {
        const students = Reader.readJsonFile("visualpartners.json")
        const getStudentsEmailsByCertification = StudentServices.getStudentsEmails(students, certification)
        return getStudentsEmailsByCertification
    }

    static getStudentsByCredits(credits) {
        const students = Reader.readJsonFile("visualpartners.json")
        const studentsByCredits = StudentServices.filterStudentsByCredits(students, credits)
        return studentsByCredits
    }
}

module.exports = StudentController;