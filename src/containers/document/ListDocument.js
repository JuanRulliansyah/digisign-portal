import { appConfigs } from "configs";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteDocument } from "services/document/manageDocument";
import { getListDocument } from "services/document/manageDocument";
import toast, { Toaster } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const ListDocument = (props) => {
    const notifySuccessDelete = () => toast.success('Document successfully deleted');
    const notifyError = () => toast.error('Cannot process delete');

    const [loading, setLoading] = useState(false);
    let loadingStyle = {position: 'fixed', zIndex: 9999999999, height: '50px', float: 'center', left: 0, right: 0, margin: 'auto'}

    const createDocument = () =>{ 
        props.history.push(`${appConfigs.rootUrl}/document/create-document/`);
      }

    const [ documents, setDocument ] = useState([]);

    useEffect(() => {
        getListDocument().then(response => {
            if(response.status === 200) {
                setDocument(response.data)
            }
        });
    }, [setDocument]);

    const handleDelete = (identity) => {
        setLoading(true);
        deleteDocument(identity).then(response => {
            setLoading(false);
            if(response.status !== 204) {
                notifyError();
            } else {
              notifySuccessDelete();
              setTimeout(() => {
                  window.location.reload();
              }, 2000);
          }
        });
    };

    const handleAction = (props, identity, action) => {
        if(action === "delete") {
            confirmAlert({
                title: 'Confirm Delete',
                message: 'Are you sure want to delete this Document?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => handleDelete(identity)
                  },
                  {
                    label: 'No',
                    onClick: () => ""
                  }
                ]
              });
        } else if(action === "edit") {
            props.history.push(`${appConfigs.rootUrl}/document/edit-document/?identity=${identity}`)
        } else if(action === "detail") {
            props.history.push(`${appConfigs.rootUrl}/document/detail-document/?identity=${identity}`)

        }
    };

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

    return ( 
        <>
            {loading &&
                <img style={loadingStyle} src={require("assets/img/loading.gif").default} alt="loading"></img>
            }
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <div
                        className={
                        "relative flex flex-col min-w-0 break-words mb-1 w-full shadow-xs rounded bg-white"
                        }
                    >
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Document</h6>
                                <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={createDocument}
                                >
                                    Create Document
                                </button>
                            </div>
                        </div>
                    </div>
                <DataTable 
                    columns={columns}
                    data={documents}
                    pagination
                    defaultSortFieldId={1}
                />
                <Toaster />
                </div>
            </div>
        </>
     );
}
 
export default ListDocument;