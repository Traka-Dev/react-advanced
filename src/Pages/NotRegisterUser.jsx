import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";

export const NotRegisterUser = () => {
    console.dir(":;D");
    const { activateAuth } = useContext(Context);
    return (
        <>
            <UserForm  onSubmit={activateAuth}/>
        </>
    );
};
