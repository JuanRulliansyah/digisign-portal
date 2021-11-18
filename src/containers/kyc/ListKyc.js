import CardKyc from "components/Cards/CardKyc";
import CardProfile from "components/Cards/CardProfile";
import CardSettings from "components/Cards/CardSettings";
import React, { useEffect, useState } from "react";
import DataListKyc from "./includes/DataListKyc";
import {getListKyc} from "services/kyc/manageKyc";

// components

const ListKyc = (props) => {

    const [ kyc, setKyc ] = useState([]);

    useEffect(() => {
        getListKyc().then(response => {
            setKyc(response.data)
        });
    }, [setKyc])

    return ( 
        <>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 px-4">
            <DataListKyc {...props} kyc={kyc}/>
            </div>
        </div>
        </>
     );
}
 
export default ListKyc;