import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export const useForm = (initialFieldValue) => {
    const [values, setValues] = useState(initialFieldValue);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return {
        values,
        setValues,
        handleInputChange,
    };
};

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1),
        },
    },
}));

export const Form = ({ children }) => {
    const classes = useStyles();

    return <form className={classes.root}>{children}</form>;
};
