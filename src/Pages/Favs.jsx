import React from "react";
import { Helmet } from "react-helmet";
import { RenderFavs } from "../containers/GetFavorites";
import { Layout } from "../components/Layout";
import { subscribe } from "graphql";

export const Favs = () => {
    return (
        <Layout
            title={"Tus Favoritos"}
            subtitle={"Aquí puedes encontrar tus favoritos"}
        >
            <RenderFavs />
        </Layout>
    );
};
