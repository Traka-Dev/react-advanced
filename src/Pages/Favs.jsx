import React from "react";
import { RenderFavs } from "../containers/GetFavorites";
import { Layout } from "../components/Layout";

export default () => {
    return (
        <Layout
            title={"Tus Favoritos"}
            subtitle={"Aquí puedes encontrar tus favoritos"}
        >
            <RenderFavs />
        </Layout>
    );
};
