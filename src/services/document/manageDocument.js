import axios from "axios";
import { appConfigs } from "configs";
// import { LocalStorageService } from "utils/storage";

export const postDocument = async (data) => {
    let result = [];
    // const localStorage = LocalStorageService.getService();
    const letter = new FormData();

    // Files
    console.log(data.document[0]);
    letter.append('document', data.document[0]);
    
    const url = appConfigs.apiUrl + 'document/';

    await axios.post(url, letter, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

        }
    })
    .then(function (response) {
        result = response
    }).catch(function (error) {
        result = error.response
    });
    return result;
}

export const getListDocument = async () => {
    let result = [];
    const url = appConfigs.apiUrl + 'document/';

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

export const getDetailDocument = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + `document/${identity}/`;
    console.log(url);

    await axios.get(url, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

        }}).then(response => {
        result = response;
    }).catch(error => {
        result = error.response;
    });

    console.log(result);

    return result;
}

export const deleteDocument = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + 'document/delete/'+identity;

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