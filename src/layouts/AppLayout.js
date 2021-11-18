import Sidebar from 'components/Sidebar/Sidebar';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
// import Footer from 'containers/navs/Footer';

const AppLayout = ({ containerClassnames, children, history }) => {
    return (
        <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
                
            <FooterAdmin />
            </div>
        </div>
        </>
    );
};

// const AppLayout = ({ containerClassnames, children, history }) => {
//     return (
//         <>
//         <Sidebar />
//         <div className="relative md:ml-64 bg-blueGray-100">
            // <AdminNavbar />
            // {/* Header */}
            // <HeaderStats />
            // asdasdsa
            // <div className="px-4 md:px-10 mx-auto w-full -m-24">
            //     {/* <main>
            //         <div className="container-fluid">{children}</div>
            //     </main> */}
            //     {/* <Switch>
            //         <Route></Route>
            //     </Switch> */}
            // {/* <Switch>
            //     <Route path="/admin/dashboard" exact component={Dashboard} />
            //     <Route path="/admin/maps" exact component={Maps} />
            //     <Route path="/admin/settings" exact component={Settings} />
            //     <Route path="/admin/tables" exact component={Tables} />
            //     <Redirect from="/admin" to="/admin/dashboard" />
            // </Switch> */}
            // <FooterAdmin />
            // </div>
//         </div>
//         {/* <div id="app-container" className={containerClassnames}>
//             <TopNav history={history}/>
//             <Sidebar />
//             <main>
//                 <div className="container-fluid">{children}</div>
//             </main>
//             <Footer />
//         </div> */}
//         </>
//     );
// };

const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = '';
    return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
    connect(mapStateToProps, mapActionToProps)(AppLayout)
);


// END


// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
// import Footer from 'containers/navs/Footer';

// const AppLayout = ({ containerClassnames, children, history }) => {
//     return (
//         <div id="app-container" className={containerClassnames}>
//             <TopNav history={history}/>
//             <Sidebar />
//             <main>
//                 <div className="container-fluid">{children}</div>
//             </main>
//             <Footer />
//         </div>
//     );
// };
// const mapStateToProps = ({ menu }) => {
//     const { containerClassnames } = menu;
//     return { containerClassnames };
// };
// const mapActionToProps = {};

// export default withRouter(
//     connect(mapStateToProps, mapActionToProps)(AppLayout)
// );
