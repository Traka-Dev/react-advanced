import propTypes from "prop-types";
import React from "react";
import { Button } from "./styles";

export const SubmitButton = ({ children, disabled, onClick }) => (
    <Button disabled={disabled} onClick={onClick}>
        {children}
    </Button>
);

SubmitButton.propTypes = {
    disabled: propTypes.bool,
    onClick: propTypes.func,
    children: propTypes.node.isRequired
}