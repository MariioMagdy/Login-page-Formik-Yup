import React from "react";
import { useFormik } from "formik";

const Input = ({ palceholder, name, value, onChange, onBlur, type }) => {
    return (
        <>
            <input
                placeholder={palceholder}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
            />
        </>
    );
};

export default Input;
