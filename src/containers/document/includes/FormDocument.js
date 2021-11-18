import { Controller, useForm } from "react-hook-form";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import { setErrorValidation } from "utils/helpers/commons";
import { withRouter } from 'react-router-dom';
import { alertNotification } from "utils/helpers/alertNotifications";
import { appConfigs } from "configs";
import { postLetter } from "services/letter/manageLetter";
import ReactDatePicker from "react-datepicker";
import { dateFormat } from "utils/helpers/dateFormat";


const FormDocument = (props) => {

    return ( 
        <>
            <form onSubmit={props.handleSubmit} >
                <div className="flex mt-6 flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <FormGroup className="relative w-full mb-3"> 
                            <Label 
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
                            for="position_letter">
                            Document (Document .PDF)
                            </Label>
                            <Input name="document" 
                            type="file"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            innerRef={props.register}/>
                            {props.errors.document && <div className="invalid-feedback d-block">{props.errors.document.message}</div>}
                        </FormGroup>
                    </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" /> <br />

                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <Button 
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                    <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                    </span>
                    <span className="label">Save Document</span>
                    </Button>
                </div>
                </div>
            </form>
        </>
     );
}
 
export default withRouter(FormDocument);