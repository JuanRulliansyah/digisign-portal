import { useEffect, useState } from "react";
import DataListLetter from "./includes/DataListLetter";
import {getListLetter} from "services/letter/manageLetter";
import { deleteLetter } from "services/letter/manageLetter";
import { alertNotification } from "utils/helpers/alertNotifications";
import { appConfigs } from "configs";


const ListLetter = (props) => {

    const [ letters, setLetter ] = useState([]);

    useEffect(() => {
        getListLetter().then(response => {
            setLetter(response.data)
        });
    }, [setLetter])


    return ( 
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
            <DataListLetter {...props} letters={letters} />
            </div>
        </div>
     );
}
 
export default ListLetter;