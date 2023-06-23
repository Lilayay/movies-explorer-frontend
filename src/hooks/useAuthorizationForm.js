import { useState, useCallback } from "react";

const useAuthorizationForm = () => {
    const [errors, setErrors] = useState({});
    const [formValue, setFormValue] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValue({
            ...formValue,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: e.target.validationMessage,
        });

        setIsValid(e.target.closest("#form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setFormValue(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setFormValue, setErrors, setIsValid]
    );

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
