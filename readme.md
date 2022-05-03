# Code Challenge Project for LaunchX by D. Ascencio.

## Requerimentos del ejercicio 

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## Pasos seguidos para crear el proyecto

0. Instalar librerias necesarias
   
    * Iniciar `npm`: `npm init` .
    * Instalar jest: `npm install --save-dev jest`. 
    * Express: ``npm install express --save``. <br> <br>

1. Crear un `Reader.js` para leer archivos tipo JSON.
   
    ```javascript
        const fs = require("fs");

        class Reader {
            static readJsonFile(file) {
                const rawdata = fs.readFileSync(file);
                const students = JSON.parse(rawdata);
                return students
            }
        }

        module.exports = Reader;

    ```

2. Agregando automatizacion de pruebas Github Actions `.github\workflows\test.yml`.
   ``` yml
    name: Run Tests in my project every push on GitHub

    on: [push]

    jobs:
    build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v1
        - name: Run Jest
        uses: stefanoeb/jest-action@1.0.3
   ```

3. Agregando test de unidad Reader.test.js
    ```javascript
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

    ```

4. Crear ``class StudentServices`` para obtener las estudiantes por certificacion, por numero de credito o su email. <br>
   `StudentServices.js`
    ```javascript
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

            static getStudentsByCredit(students, credits) {
                const studentsByCredits = students.filter((student) => student.credits > credits);
                return studentsByCredits;
            }
        }

        module.exports = StudentServices;
    ```
    Y su respectivo test `StudentService.test.js`:
    ```javascript
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
            const studentsByCredits = StudentServices.getStudentsByCredit(students,400 )
            expect(studentsByCredits).toStrictEqual([{"id": "2","name": "Rosy","email": "rosy@dummymail.com", "credits": 608,"haveCertification": true}]);
    ```


