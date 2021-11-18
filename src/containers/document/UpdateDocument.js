import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDetailDocument } from "services/document/manageDocument";
import { getDetailLetter } from "services/letter/manageLetter";
import { alertNotification } from "utils/helpers/alertNotifications";
import { useQuery } from "utils/helpers/useQuery";
import FormLetter from "./includes/FormLetter";


const UpdateDocument = (props) => {
    let query = useQuery();
    const letter = query.get('identity');
    const [isLoaded, setIsLoaded] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const { register, errors, handleSubmit, setError, reset, control, setValue, clearErrors } = useForm();
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        async function fetchDocument() {
            await getDetailDocument(identity).then(response => {
                if(response.status !== 200) {
                    alertNotification(
                        'error',
                        response.data.message,
                        'Error',
                        3000
                    )
                } else {
                    const document = response.data;
                    setLetters(document);
                    reset({
                        'document': document.document,
                        'created_at': document.created_at,
                        'status': document.status
                    });
                    setIsLoaded(true);
                }
            });
        }
        fetchDocument();
    }, [document, reset]);

    const onSubmitLetter = (data) => {
        // handleUpdate(patchVoucher, data, voucher, setLoading, setError, props.history,
        //     'Voucher Updated Successfully', '/promotion/voucher');
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Detail Document</h6>
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
                    item={documents}
                    action="update"
                />
            </div>
        </div>
    );
};

export default UpdateDocument;