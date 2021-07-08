import PageHeader from "../components/PageHeader";
import PeopleIcon from "@material-ui/icons/People";
import EmployeeForm from "./EmployeeForm";
import useTable from "../components/useTable";
import {
    makeStyles,
    Paper,
    TableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import { getAllEmployees } from "../services/employeeService";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const Employees = () => {
    const classes = useStyles();
    const [records, setRecords] = useState(getAllEmployees());

    console.log(records);

    const { TableContainer } = useTable();
    return (
        <div>
            <PageHeader
                title="New Employee"
                subtitle="Form and validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <TableContainer>
                    <TableBody>
                        {records.map((record, index) => (
                            <TableRow key={index}>
                                <TableCell>{record.fullName}</TableCell>
                                <TableCell>{record.gender}</TableCell>
                                <TableCell>{record.email}</TableCell>
                                <TableCell>{record.phoneNumber}</TableCell>
                                <TableCell>{record.city}</TableCell>
                                <TableCell>{record.isPermanent}</TableCell>
                                <TableCell>{record.hireDate}</TableCell>
                                <TableCell>{record.departmentId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default Employees;
