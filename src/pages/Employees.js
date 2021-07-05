import PageHeader from "../components/PageHeader";
import PeopleIcon from "@material-ui/icons/People";
import EmployeeForm from "./EmployeeForm";

const Employees = () => {
    return (
        <div>
            <PageHeader
                title="New Employee"
                subtitle="Form and validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <EmployeeForm />
        </div>
    );
};

export default Employees;
