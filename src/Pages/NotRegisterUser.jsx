import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/RegisterMutation";

export const NotRegisterUser = () => {
    const { activateAuth } = useContext(Context);
    const { registerMutation, error, loading } = useRegisterMutation();
    const onSubmit = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables: variables }).then(activateAuth);
    };    

    return (
        <>
            <UserForm
                error={error}
                disabled = {loading}
                title="Registrarse"
                onSubmit={onSubmit}
            />            
            <UserForm title="Iniciar Sesión" onSubmit={activateAuth} />
        </>
    );
};
