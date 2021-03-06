import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import Button from "../components/Button";
import Checkbox from "../components/controls/Checkbox";
import DatePicker from "../components/controls/DatePicker";
import Input from "../components/controls/Input";
import RadioGroup from "../components/controls/RadioGroup";
import Select from "../components/controls/Select";
import { useForm, Form } from "../components/useForm";
import { addEmployee } from "../redux/actions/employees.action";
import * as employeeService from "../services/employeeService";

const EmployeeForm = ({ addOrEdit, recordForEdit }) => {
    const genders = ["Male", "Female"];

    const initialFieldValue = {
        id: Math.floor(Math.random() * 1000),
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        gender: "male",
        departmentId: "",
        hireDate: new Date(),
        isPermanent: false,
    };

    const { values, setValues, errors, setErrors, handleInputChange } =
        useForm(initialFieldValue);

    function validate() {
        let temp = {};
        temp.fullName = values.fullName ? "" : "This field is required";
        temp.email =
            /$^|.+@..+/.test(values.email) && values.email
                ? ""
                : "Email is not valid";
        temp.phoneNumber =
            values.phoneNumber.length > 9
                ? ""
                : "Phone number should be greater than 9 digits";
        temp.city = values.city ? "" : "This field is required";

        setErrors({
            ...temp,
        });
        console.log(temp);
        return Object.values(temp).every((el) => el === "");
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values);
            setValues(initialFieldValue);
            setErrors([]);
        }
    }

    useEffect(() => {
        if (recordForEdit) {
            setValues({ ...recordForEdit });
        }
    }, [recordForEdit, setValues]);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        label="Full Name"
                        name="fullName"
                        onChange={handleInputChange}
                        value={values.fullName}
                        error={errors.fullName}
                    />
                    <Input
                        label="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}
                        error={errors.email}
                    />
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        onChange={handleInputChange}
                        value={values.phoneNumber}
                        error={errors.phoneNumber}
                    />
                    <Input
                        label="City"
                        name="city"
                        onChange={handleInputChange}
                        value={values.city}
                        error={errors.city}
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
                    <Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                    />
                    <DatePicker
                        name="hireDate"
                        label="Date of Hiring"
                        onChange={handleInputChange}
                        value={values.hireDate}
                    />
                    <Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        onChange={handleInputChange}
                        value={values.isPermanent}
                    />
                    <div>
                        <Button label="Submit" type="submit" />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;
