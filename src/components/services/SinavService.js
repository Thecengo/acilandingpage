import axios from 'axios';

//const SESSION_URL = "https://biga-aci-be.herokuapp.com/sinav/activeType";
const SESSION_URL = "http://localhost:8086/sinav/activeType";
class SinavService {

    getSinavTypes() {
        return axios.get(SESSION_URL);
    }

}

export default new SinavService ();