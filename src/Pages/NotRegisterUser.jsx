import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/RegisterMutation";
import { useLoginMutation } from "../containers/LoginMutation";

export const NotRegisterUser = () => {
    const { activateAuth } = useContext(Context);
    const { registerMutation, error, loading } = useRegisterMutation();
    const {
        loginMutation,
        error: errorLogin,
        loading: loadingLogin,
    } = useLoginMutation();
    const onRegister = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables: variables }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
        });;
    };
    const onLogin = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        loginMutation({ variables: variables }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
        });
    };

    const errorMsg = error && "El usuario ya existe o hay algún problema.";
    const errorMsgLogin = errorLogin && "Contraseña o Usuario incorrecto.";

    return (
        <>
            <UserForm
                disabled={loading}
                title="Registrarse"
                error={errorMsg}
                onSubmit={onRegister}
            />
            <UserForm
                title="Iniciar Sesión"
                error={errorMsgLogin}
                disabled={loadingLogin}
                onSubmit={onLogin}
            />
        </>
    );
};
