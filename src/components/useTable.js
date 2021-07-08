import { Table, TableHead, TableRow } from "@material-ui/core";

const useTable = (records, headCells) => {
    const TableContainer = (props) => <Table>{props.children}</Table>;

    const TableHeader = (props) => {
        return (
            <TableHead>
                <TableRow></TableRow>
            </TableHead>
        );
    };

    return {
        TableContainer,
    };
};

export default useTable;
