import { Grid } from "@material-ui/core";
import Checkbox from "../components/controls/Checkbox";
import DatePicker from "../components/controls/DatePicker";
import Input from "../components/controls/Input";
import RadioGroup from "../components/controls/RadioGroup";
import Select from "../components/controls/Select";
import { useForm, Form } from "../components/useForm";
import * as employeeService from "../services/employeeService";

const EmployeeForm = () => {
    const genders = [
        { id: "male", title: "Male" },
        { id: "female", title: "Female" },
    ];

    const initialFieldValue = {
        id: 0,
        fullName: "",
        email: "",
        phoneNumber: null,
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
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        onChange={handleInputChange}
                        value={values.phoneNumber}
                    />
                    <Input
                        label="City"
                        name="city"
                        onChange={handleInputChange}
                        value={values.city}
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
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;
