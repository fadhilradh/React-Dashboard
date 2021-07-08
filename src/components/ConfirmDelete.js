import {
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
    dialog: {
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(5),
    },
    dialogContent: {
        textAlign: "center",
    },
    dialogAction: {
        justifyContent: "center",
    },
    dialogTitle: {
        textAlign: "center",
    },
    titleIcon: {
        backgroundColor: "rgb(170, 153, 218)",

        color: theme.palette.secondary.main,
        "& hover": {
            backgroundColor: theme.palette.secondary.light,
            cursor: "default",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "8rem",
        },
    },
}));

const ConfirmDelete = ({ confirmDelete, setConfirmDelete }) => {
    const classes = useStyles();
    return (
        <Dialog open={confirmDelete.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton className={classes.titleIcon} disableRipple>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">{confirmDelete.title}</Typography>
                <Typography variant="subtitle2">
                    {confirmDelete.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Button
                    label="No"
                    color="default"
                    onClick={() =>
                        setConfirmDelete({ ...confirmDelete, isOpen: false })
                    }
                />
                <Button
                    label="Yes"
                    color="secondary"
                    onClick={confirmDelete.onConfirm}
                />
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDelete;
