import {
    makeStyles,
    Table,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
// import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    table: {
        marginTop: theme.spacing(3),
        "& thead th": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        "& tbody td": {
            fontWeight: "300",
        },
        "& tbody tr:hover": {
            backgroundColor: "fffbf2",
            cursor: "pointer",
        },
    },
}));

const useTable = (headCells) => {
    const TableContainer = (props) => (
        <Table className={classes.table}>{props.children}</Table>
    );

    // const pages = [5, 10, 25];
    // const [page, setPage] = useState(0);

    const classes = useStyles();
    const TableHeader = (props) => {
        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell key={headCell.id}>
                            {headCell.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };

    return {
        TableContainer,
        TableHeader,
    };
};

export default useTable;
