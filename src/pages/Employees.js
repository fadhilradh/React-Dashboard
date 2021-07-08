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
    Toolbar,
} from "@material-ui/core";
import { getAllEmployees } from "../services/employeeService";
import { useState } from "react";
import Button from "../components/Button";
import AddIcon from "@material-ui/icons/Add";
import PopUpDialog from "../components/PopUpDialog";
import headCells from "../lib/tableHeaders";
import { useEffect } from "react";
import * as employeeService from "../services/employeeService";
import ActionButton from "../components/ActionButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    newButton: {
        position: "absolute",
        right: "10px",
        textTransform: "uppercase",
    },
}));

const Employees = () => {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState();
    const [records, setRecords] = useState(getAllEmployees());
    const [openPopUp, setOpenPopup] = useState(false);

    function addOrEdit(employee) {
        employeeService.addEmployees(employee);
        setOpenPopup(false);
        setRecords(getAllEmployees());
    }

    function editInPopUp(record) {}

    const { TableContainer, TableHeader } = useTable(records, headCells);
    return (
        <div>
            <PageHeader
                title="New Employee"
                subtitle="Form and validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <PopUpDialog
                    openPopup={openPopUp}
                    setOpenPopup={setOpenPopup}
                    title="Add New Employee"
                >
                    <EmployeeForm addOrEdit={addOrEdit} />
                </PopUpDialog>
                <Toolbar>
                    <Button
                        className={classes.newButton}
                        label="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => setOpenPopup(true)}
                    />
                </Toolbar>
                <TableContainer>
                    <TableHeader />
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
                                <div>
                                    <ActionButton
                                        color="primary"
                                        onClick={() => {
                                            editInPopUp(record);
                                        }}
                                    >
                                        <EditOutlinedIcon />
                                    </ActionButton>

                                    <ActionButton color="primary">
                                        <DeleteOutlineIcon />
                                    </ActionButton>
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default Employees;
