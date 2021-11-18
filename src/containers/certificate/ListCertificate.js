import CardKyc from "components/Cards/CardKyc";
import CardProfile from "components/Cards/CardProfile";
import CardSettings from "components/Cards/CardSettings";
import React, { useEffect, useState } from "react";
import {getListKyc} from "services/kyc/manageKyc";
import { getListCertificate } from "services/certificate/manageCertificate";
import DataListCertificate from "./includes/DataListCertificate";

// components

const ListCertificate = (props) => {

    const [ certificate, setCertificate ] = useState([]);

    useEffect(() => {
        getListCertificate().then(response => {
            setCertificate(response.data)
        });
    }, [setCertificate])

    return ( 
        <>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 px-4">
            <DataListCertificate {...props} certificate={certificate}/>
            </div>
        </div>
        </>
     );
}
 
export default ListCertificate;