import axios from 'axios';

//const STUDENT_URL = "https://biga-aci-be.herokuapp.com/student";
const STUDENT_URL = "http://localhost:8086/student";
class StudentService {

    createStudents(student) {
        return axios.post(STUDENT_URL, student);
    }

}

export default new StudentService();