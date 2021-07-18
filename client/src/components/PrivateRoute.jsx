import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const history = useHistory();

    const accessToken = useContext(TokenContext)

    // IT NO WORK?
    // --------------------
    // if (accessToken) {
    //     const decodedToken = jwt_decode(accessToken);

    //     console.log(decodedToken);
    // }

    return (
        <></>
        // <Route
        //     {...rest}
        //     render={(props) => {
        //         // logic for authenticated user to access /app part goes here.
        //         // e.g. check if user is logged-in logic.
        //         const isLoggedIn = true;

        //         return isLoggedIn ? (
        //             <Component {...props} />
        //         ) : (
        //             <Redirect to={"/login"} />
        //         );
        //     }}
        // />
    );
};