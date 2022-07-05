import React from "react";
import { PhotoCardWhitDetails } from "../containers/PhotoCarWithDetails";
import { Layout } from "../components/Layout";

export const Detail = ({ detailId }) => {
    return (
        <Layout title={`Fotografía ${detailId}`}>
            <PhotoCardWhitDetails id={detailId} />
        </Layout>
    );
};
