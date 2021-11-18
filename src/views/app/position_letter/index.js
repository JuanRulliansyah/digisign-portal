import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateLetter = React.lazy(() => import('containers/letter/CreateLetter'));
const ListLetter = React.lazy(() => import('containers/letter/ListLetter'));
const UpdateLetter = React.lazy(() => import('containers/letter/UpdateLetter'));

const PositionLetterPages = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Route
                path={`${match.url}/create-letter`}
                render={(props) => <CreateLetter {...props} />}
            />
            <Route
                path={`${match.url}/edit-letter`}
                render={(props) => <UpdateLetter {...props} />}
            />
            <Route
                path={`${match.url}/`}
                render={(props) => <ListLetter {...props} />}
            />
            <Redirect to="/not-found" />
        </Switch>
    </Suspense>
);
export default PositionLetterPages;