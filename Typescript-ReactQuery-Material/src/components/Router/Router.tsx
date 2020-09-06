import React from 'react';
import { Switch, Router, Route, Redirect, RouteProps } from 'react-router-dom';
import Home from 'features/Home';
import history from 'config/history';
import { getAuthToken } from 'utils/localstorage';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <GuestRoute exact path="/">
                    <Home />
                </GuestRoute>
            </Switch>
        </Router>
    );
}

// interface GuestRouteProps extends RouteProps {

// }

const GuestRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                getAuthToken() === '' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/disputes',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                getAuthToken() !== '' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
