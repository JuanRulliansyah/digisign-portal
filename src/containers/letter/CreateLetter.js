import CardLetter from "components/Cards/CardLetter";
import { appConfigs } from "configs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postLetter } from "services/letter/manageLetter";
import { alertNotification } from "utils/helpers/alertNotifications";
import { setErrorValidation } from "utils/helpers/commons";
import FormLetter from "./includes/FormLetter";

// components

const CreateLetter = (props) => {

    const [ loading, setLoading ] = useState(false);
    const { register, errors, handleSubmit, setValue, setError, clearErrors, control } = useForm();

    const onSubmitLetter = (data) => {
        // dispatch(loginProcess());
        postLetter(data).then(response => {
          console.log(data);
          console.log(response);
          if(response.status !== 201) {
              setErrorValidation(response, setError);
          } else {
            alertNotification(
                'success',
                'KYC has been submitted, please wait for our review',
                'Success',
                3000
            )
            setTimeout(() => {
                props.history.push(`${appConfigs.rootUrl}/dashboard/`);
            }, 2000);
        }
        });
      };

    return ( 
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Position Letter</h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <FormLetter
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    loading={loading}
                    control={control}
                    handleSubmit={handleSubmit(onSubmitLetter)}
                    action="create"
                />
            </div>
        </div>
        </>
     );
}
 
export default CreateLetter;