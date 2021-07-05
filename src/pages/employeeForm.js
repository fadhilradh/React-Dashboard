import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";

const EmployeeForm = () => {
    const initialFieldValue = {
        id: 0,
        fullName: "",
        email: "",
        phoneNumber: 0,
        city: "",
        gender: "male",
        departmentId: "",
        hireDate: new Date(),
        isPermanent: false,
    };

    const [values, setValues] = useState(initialFieldValue);

    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        label="Full Name"
                        value={values.fullName}
                        variant="outlined"
                    />
                    <TextField
                        label="Email"
                        value={values.email}
                        variant="outlined"
                    />
                </Grid>
                <Grid item=""></Grid>
            </Grid>
        </form>
    );
};

export default EmployeeForm;
