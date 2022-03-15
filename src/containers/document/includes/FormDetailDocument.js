import { Button, FormGroup, Input, Label } from "reactstrap";
import { withRouter } from 'react-router-dom';



const FormDetailDocument = (props) => {
    return ( 
        <>
            <div className="flex mt-6 flex-wrap">
                <object data={props.item.pdf_url} type="application/pdf" width="500" height="678">
                    <iframe title={props.item.id} src={props.item.pdf_url} runat="server" width="100px" height="678">
                    </iframe>
                </object>
            </div>
            <br></br>
            <a className="text-lightBlue-500" target="_blank" rel="noreferrer" href={props.item.pdf_url}>See Detail Document</a>

            <hr className="mt-6 border-b-1 border-blueGray-300" /> <br />
            <h6 className="text-blueGray-700 mb-2 text-xl font-bold">Status</h6>
            {(props.item.status === "signed" ? <div style={{backgroundColor: "#4db368", color:"white"}} className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">Signed</div>: <div className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Not Signed</div>)}
            <form onSubmit={props.handleSubmit}>
                <div className="flex mt-6 flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <Input type="hidden" innerRef={props.register} name="document_id" value={props.item.id}></Input>
                        <FormGroup className="relative w-full mb-3"> 
                            <Label 
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
                                for="document">
                                Certificate Password
                                </Label>
                                <Input 
                                innerRef={props.register}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="password" name="password"></Input>
                        </FormGroup>

                    </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <Button 
                        className="bg-lightBlue-500 mt-2 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                    <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                    </span>
                    <span className="label">Sign Document</span>
                    </Button>
                </div>
                </div>
            </form>
        </>
     );
}
 
export default withRouter(FormDetailDocument);