import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ListOfFavs } from "../components/listOfFavs";

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;
export const RenderFavs = () => {
    const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' });
    if (error) return <h2>Internal Server Error</h2>;
    if (loading) return <h2>Loading...</h2>;
    const { favs } = data;

    return <ListOfFavs favs={favs} />;
};
