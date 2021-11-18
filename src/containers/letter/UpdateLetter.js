import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDetailLetter } from "services/letter/manageLetter";
import { alertNotification } from "utils/helpers/alertNotifications";
import { useQuery } from "utils/helpers/useQuery";
import FormLetter from "./includes/FormLetter";


const UpdateLetter = (props) => {
    let query = useQuery();
    const letter = query.get('identity');
    const [isLoaded, setIsLoaded] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const { register, errors, handleSubmit, setError, reset, control, setValue, clearErrors } = useForm();
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        async function fetchLetter() {
            await getDetailLetter(letter).then(response => {
                if(response.status !== 200) {
                    alertNotification(
                        'error',
                        response.data.message,
                        'Error',
                        3000
                    )
                } else {
                    const letter = response.data;
                    setLetters(letter);
                    reset({
                        'position_id': letter.position_id,
                        'date_start': letter.date_start,
                        'date_end': letter.date_end,
                        'active': letter.active,
                        'status': letter.status
                    });
                    setIsLoaded(true);
                }
            });
        }
        fetchLetter();
    }, [letter, reset]);

    const onSubmitLetter = (data) => {
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
                <FormLetter
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    loading={loading}
                    control={control}
                    handleSubmit={handleSubmit(onSubmitLetter)}
                    item={letters}
                    action="update"
                />
            </div>
        </div>
    );
};

export default UpdateLetter;