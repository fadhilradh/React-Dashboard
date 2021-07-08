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
import Notification from "../components/Notification";
import ConfirmDelete from "../components/ConfirmDelete";

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
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const [confirmDelete, setConfirmDelete] = useState({
        isOpen: false,
        title: "",
        subtitle: "",
    });

    function addOrEdit(employee) {
        if (employee.id === 0) {
            employeeService.addEmployees(employee);
        } else {
            employeeService.updateEmployee(employee);
        }
        setOpenPopup(false);
        setRecords(getAllEmployees());
        setRecordForEdit(null);
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success",
        });
    }

    function editInPopUp(record) {
        setRecordForEdit(record);
        setOpenPopup(true);
    }

    function onDelete(id) {
        setConfirmDelete({
            ...confirmDelete,
            isOpen: false,
        });
        employeeService.deleteEmployee(id);
        setRecords(getAllEmployees());
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error",
        });
    }

    const { TableContainer, TableHeader } = useTable(records, headCells);
    return (
        <div>
            <PageHeader
                title="Employee Management"
                icon={<PeopleIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <PopUpDialog
                    openPopup={openPopUp}
                    setOpenPopup={setOpenPopup}
                    title="Add New Employee"
                >
                    <EmployeeForm
                        addOrEdit={addOrEdit}
                        recordForEdit={recordForEdit}
                    />
                </PopUpDialog>
                <Toolbar>
                    <Button
                        className={classes.newButton}
                        label="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => {
                            setOpenPopup(true);
                            setRecordForEdit(null);
                        }}
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

                                    <ActionButton
                                        color="primary"
                                        onClick={() => {
                                            setConfirmDelete({
                                                isOpen: true,
                                                title: "Are you sure you want to delete?",
                                                subtitle:
                                                    "You can`t undo this operation",
                                                onConfirm: () => {
                                                    onDelete(record.id);
                                                },
                                            });
                                        }}
                                    >
                                        <DeleteOutlineIcon />
                                    </ActionButton>
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Paper>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDelete
                confirmDelete={confirmDelete}
                setConfirmDelete={setConfirmDelete}
            />
        </div>
    );
};

export default Employees;
