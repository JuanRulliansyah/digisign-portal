import CardCertificate from "components/Cards/CardCertificate";
import React from "react";

// components

const CreateCertificate = (props) => {
    return ( 
        <>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 px-4">
            <CardCertificate />
            </div>
        </div>
        </>
     );
}
 
export default CreateCertificate;