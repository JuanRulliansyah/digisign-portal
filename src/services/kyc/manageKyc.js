import axios from "axios";
import { appConfigs } from "configs";
// import { LocalStorageService } from "utils/storage";

export const postKyc = async (data) => {
    let result = [];
    // const localStorage = LocalStorageService.getService();
    const kyc = new FormData();
    kyc.append('identity_number', data.identity_number);
    kyc.append('gender', data.gender);
    kyc.append('place_of_birth', data.place_of_birth);
    kyc.append('date_of_birth', data.date_of_birth);
    kyc.append('province', data.province);
    kyc.append('city', data.city);
    kyc.append('district', data.district);
    kyc.append('sub_district', data.sub_district);
    kyc.append('address', data.address);
    kyc.append('postal_code', data.postal_code);

    // Files
    console.log(data.identity_file[0]);
    kyc.append('identity_file', data.identity_file[0]);
    kyc.append('face_file', data.face_file[0]);
    kyc.append('selfie_file', data.selfie_file[0]);
    kyc.append('signature_file', data.signature_file[0]);
    
    const url = appConfigs.apiUrl + 'profile/';

    await axios.post(url, kyc, {
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
    console.log('response manageKyc.js : ' + result);
    return result;
}

export const getListKyc = async () => {
    let result = [];
    const url = appConfigs.apiUrl + 'profile-list/';

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

export const deleteKyc = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + 'profile/delete/'+identity;

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

export const getDetailKyc = async (identity) => {
    let result = [];
    const url = appConfigs.apiUrl + `profile/${identity}/`;

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