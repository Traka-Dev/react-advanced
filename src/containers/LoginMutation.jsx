import React from "react";
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`
export const useLoginMutation = () => {
  const [loginMutation, {error, loading}] = useMutation(LOGIN)   
  return { loginMutation, error, loading }
}