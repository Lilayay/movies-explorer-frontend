import { useState, useCallback } from "react";

const useAuthorizationForm = () => {
    const [errors, setErrors] = useState({});
    const [formValue, setFormValue] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setFormValue({ ...formValue, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(
            Boolean(formValue.email && validateEmail(formValue.email)) &&
            e.target.closest("form").checkValidity()
        );
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setFormValue(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setFormValue, setErrors, setIsValid]
    );

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
            );
    };

    return {
        formValue,
        errors,
        isValid,
        handleChange,
        resetForm,
        setFormValue,
        setIsValid,
    };
};

export default useAuthorizationForm;
