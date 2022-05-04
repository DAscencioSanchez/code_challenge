const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "CodeChallenge Api welcome!"});
});

app.listen(port, () => {
    console.log(`CodeChallenge API in localhost:${port}`);
});

app.get("/v1/students", (request, response) => {
    const allStudents = StudentController.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/have_certification/emails", (request, response) => {
    const studentsWithCertification = StudentController.getStudentsEmailsByCertification(true);
    response.json(studentsWithCertification);
});

app.get("/v1/students/credits/:no_credits", (request, response) => {
    const numberCredits = request.params.no_credits;
    const studentsByCredits = StudentController.getStudentsByCredits(numberCredits);
    response.json(studentsByCredits);
});
