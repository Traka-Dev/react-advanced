import React, { useContext } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./Pages/Home";
import { Router } from "@reach/router";
import { Detail } from "./Pages/Detail";
import { Navbar } from "./components/Navbar";
import { Favs } from "./Pages/Favs";
import { User } from "./Pages/User";
import { NotRegisterUser } from "./Pages/NotRegisterUser";
import { Context } from "./Context";

export const App = () => {
    const { isAuth } = useContext(Context);
    console.log(isAuth);
    return (
        <>
            <GlobalStyles />
            <Logo />
            <Router>
                <Home path="/" />
                <Home path="/pet/:id" />
                <Detail path="/detail/:detailId" />
                {isAuth ? (
                    <>
                        <Favs path="/favs" />
                        <User path="/user" />
                    </>
                ) : (
                    <>
                        <NotRegisterUser path="/favs" />
                        <NotRegisterUser path="/user" />
                    </>
                )}

                <Router
                    path="/user"
                    element={isAuth ? <User /> : <NotRegisterUser />}
                />
            </Router>
            <Navbar />
        </>
    );
};
