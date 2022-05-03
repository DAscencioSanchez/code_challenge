class StudentServices {
    static filterByCertification(students, certification) {
        const studentsByCertification = students.filter((student) => student.haveCertification == certification);
        return studentsByCertification;
    }

    static getStudentsEmails(students, certification) {
        const studentsByCertification = students.filter((student) => student.haveCertification == certification);
        const emailsInCertification = studentsByCertification.map((student) => student.email);    
        return emailsInCertification;
    }

    static filterStudentsByCredit(students, credits) {
        const studentsByCredits = students.filter((student) => student.credits > credits);
        return studentsByCredits;
    }
}

module.exports = StudentServices;