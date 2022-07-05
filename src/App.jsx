import React, { Suspense, useContext } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./Pages/Home";
import { Router, Redirect } from "@reach/router";
import { Detail } from "./Pages/Detail";
import { Navbar } from "./components/Navbar";
//import { Favs } from "./Pages/Favs";
import { User } from "./Pages/User";
import { NotRegisterUser } from "./Pages/NotRegisterUser";
import { Context } from "./Context";
import { NotFound } from "./Pages/NotFound";

const Favs = React.lazy(() => import("./Pages/Favs"));

export const App = () => {
    const { isAuth } = useContext(Context);
    console.log(isAuth);
    return (
        <Suspense fallback={<div></div>}>
            <GlobalStyles />
            <Logo />
            <Router>
                <NotFound default />
                <Home path="/" />
                <Home path="/pet/:id" />
                <Detail path="/detail/:detailId" />
                {!isAuth && <NotRegisterUser path="/login" />}
                {!isAuth && <Redirect from="/favs" to="/login" />}
                {!isAuth && <Redirect from="/user" to="/login" />}
                {isAuth && <Redirect from="/login" to="/" />}
                <Favs path="/favs" />
                <User path="/user" />
            </Router>
            <Navbar />
        </Suspense>
    );
};
