import axios from "axios";
import { appConfigs } from "configs";
// import { LocalStorageService } from "utils/storage";

export const postLetter = async (data) => {
    let result = [];
    // const localStorage = LocalStorageService.getService();
    const letter = new FormData();
    letter.append('position_id', data.position);
    letter.append('date_start', data.date_start);
    letter.append('date_end', data.date_end);

    // Files
    console.log(data.position_letter[0]);
    letter.append('position_letter', data.position_letter[0]);
    
    const url = appConfigs.apiUrl + 'position-letter/';

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

export const getListLetter = async () => {
    let result = [];
    const url = appConfigs.apiUrl + 'position-letter/';

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

export const getDetailLetter = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + `position-letter/${identity}/`;

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

export const deleteLetter = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + 'position-letter/delete/'+identity;

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