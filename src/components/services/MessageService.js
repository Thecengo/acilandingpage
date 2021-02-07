import axios from 'axios';

const MESSAGE_URL = "https://biga-aci-be.herokuapp.com/message";

class MessageService {

    createMessage(message) {
        return axios.post(MESSAGE_URL, message);
    }

}

export default new MessageService();