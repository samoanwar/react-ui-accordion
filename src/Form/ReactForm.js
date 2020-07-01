import React, { useState } from 'react';
import './ReactForm.scss';

function ReactForm({defaultValues, children, onsubmit}) {
    const [values, setValues] = useState(defaultValues)
    const [errors, setErrors] = useState({...defaultValues})
    const [touched, setTouched] = useState({...defaultValues})

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleErrors = () => {
        
    }

    const handleBlur = (e) => {
        e.preventDefault();
        setTouched({
            ...touched,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(values);
    }

    const FormProps = {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur
    }

    return (
        <React.Fragment>
            {children(FormProps)}
        </React.Fragment>
    );
}

export default ReactForm;