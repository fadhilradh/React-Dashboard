import { Grid } from "@material-ui/core";
import Input from "../components/controls/Input";
import RadioGroup from "../components/controls/RadioGroup";

import { useForm, Form } from "../components/useForm";

const EmployeeForm = () => {
    const genders = [
        { id: "male", title: "Male" },
        { id: "female", title: "Female" },
    ];

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

    const { values, setValues, handleInputChange } = useForm(initialFieldValue);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        label="Full Name"
                        name="fullName"
                        onChange={handleInputChange}
                        value={values.fullName}
                    />
                    <Input
                        label="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup
                        name="gender"
                        label="Gender"
                        onChange={handleInputChange}
                        items={genders}
                        value={values.gender}
                    />
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;
