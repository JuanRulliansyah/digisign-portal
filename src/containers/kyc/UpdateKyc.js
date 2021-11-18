import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDetailKyc } from "services/kyc/manageKyc";
import { getDetailLetter } from "services/letter/manageLetter";
import { alertNotification } from "utils/helpers/alertNotifications";
import { useQuery } from "utils/helpers/useQuery";
import FormKyc from "./includes/FormKyc";


const UpdateKyc = (props) => {
    let query = useQuery();
    const kyc = query.get('identity');
    const [isLoaded, setIsLoaded] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const { register, errors, handleSubmit, setError, reset, control, setValue, clearErrors } = useForm();
    const [kycs, setKycs] = useState([]);

    useEffect(() => {
        async function fetchKyc() {
            await getDetailKyc(kyc).then(response => {
                if(response.status !== 200) {
                    alertNotification(
                        'error',
                        response.data.message,
                        'Error',
                        3000
                    )
                } else {
                    const kyc = response.data;
                    setKycs(kyc);
                    reset({
                        'identity_number': kyc.identity_number,
                        'gender': kyc.gender,
                        'place_of_birth': kyc.place_of_birth,
                        'date_of_birth': kyc.date_of_birth,
                        'province': kyc.province,
                        'city': kyc.city,
                        'district': kyc.district,
                        'sub_district': kyc.sub_district,
                        'address': kyc.address,
                        'postal_code': kyc.postal_code,
                    });
                    setIsLoaded(true);
                }
            });
        }
        fetchKyc();
    }, [kyc, reset]);

    const onSubmitKyc = (data) => {
        // handleUpdate(patchVoucher, data, voucher, setLoading, setError, props.history,
        //     'Voucher Updated Successfully', '/promotion/voucher');
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Position Letter</h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <FormKyc
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    loading={loading}
                    control={control}
                    handleSubmit={handleSubmit(onSubmitKyc)}
                    item={kycs}
                    action="update"
                />
            </div>
        </div>
    );
};

export default UpdateKyc;