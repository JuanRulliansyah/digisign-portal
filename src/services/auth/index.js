import axios from "axios";

export const postLogin = async (data) => {
    let result = []
    await axios.post(`http://localhost:8000/api/auth/login/`, data, {
        headers: {
            'Content-Type': 'application/json;'
        }
    }).then(function (response) {
        result = response
        console.log(result);
    }).catch(function (error) {
        result = error.response
        console.log(result);
    });
    return result;
}