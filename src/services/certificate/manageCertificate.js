import axios from "axios";
import { appConfigs } from "configs";
// import { LocalStorageService } from "utils/storage";

export const postCertificate = async (data) => {
    let result = [];
    // const localStorage = LocalStorageService.getService();
    const letter = new FormData();
    letter.append('password', data.password);
    
    const url = appConfigs.apiUrl + 'certificate/';

    await axios.post(url, letter, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

        }
    })
    .then(function (response) {
        result = response
        console.log(result);
    }).catch(function (error) {
        result = error.response
        console.log(result);
    });
    return result;
}

export const getListCertificate = async () => {
    let result = [];
    const url = appConfigs.apiUrl + 'certificate/';

    await axios.get(url, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

        }}).then(response => {
        result = response;
    }).catch(error => {
        result = error.response;
    });

    return result;
}