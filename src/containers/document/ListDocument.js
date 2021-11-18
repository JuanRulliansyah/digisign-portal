import { appConfigs } from "configs";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import { deleteDocument } from "services/document/manageDocument";
import { getListDocument } from "services/document/manageDocument";
import { alertNotification } from "utils/helpers/alertNotifications";
import DataListDocument from "./includes/DataListDocument";


const ListDocument = (props) => {

    const createDocument = () =>{ 
        props.history.push(`${appConfigs.rootUrl}/document/create-document/`);
      }

    const [ documents, setDocument ] = useState([]);

    useEffect(() => {
        getListDocument().then(response => {
            setDocument(response.data)
        });
    }, [setDocument])

    const handleAction = (props, identity, action) => {
        if(action === "delete") {
            deleteDocument(identity).then(response => {
                if(response.status == 204) {
                    alertNotification(
                        'success',
                        'Success Deleted',
                        'Success',
                        3000
                    )
                    setTimeout(() => {
                        props.history.push(`${appConfigs.rootUrl}/dashboard/`);
                    }, 2000);
                }
            });
        } else if(action === "edit") {
            props.history.push(`${appConfigs.rootUrl}/document/edit-document/?identity=${identity}`)
        } else if(action ==="detail") {
            props.history.push(`${appConfigs.rootUrl}/document/detail-document/?identity=${identity}`)

        }
      };
      const document_file = /[^/]*$/.exec(document.document)[0];

    const columns = [
        {
            name: 'Document',
            cell: row => (
                /[^/]*$/.exec(row.document)[0]
            )
        },
        {
            name: 'Status',
            cell: row => (
                <>
                    {(row.status==="signed" ? "Signed" : "Not Signed")}
                </>
            )
        },
        {
            name: 'Actions',
            button: true,
            cell: row => (
                <>
                <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAction(props, row.id, "edit")}><i class="fas fa-pencil-alt"></i></button>
                <button
                    className="bg-yellow-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAction(props, row.id, "detail")}><i class="fas fa-eye"></i></button>
                <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAction(props, row.id, "delete")}><i class="fas fa-trash"></i></button>
                </>
            ),
            wrap: true,
            maxWidth: '300px',
            minWidth: '300px',
        },
    ];
    console.log(documents);


    return ( 
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
            {/* <DataListDocument {...props} documents={documents} /> */}
            <h6 className="text-blueGray-700 text-xl font-bold">Document</h6>
            <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            onClick={createDocument}
            >
                Upload Document
            </button>
            <DataTable 
                columns={columns}
                data={documents}
                pagination
                defaultSortFieldId={1}
            />
            </div>
        </div>
     );
}
 
export default ListDocument;