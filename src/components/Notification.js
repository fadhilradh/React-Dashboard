import { makeStyles, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        top: theme.spacing(9),
    },
}));

const Notification = ({ notify, setNotify }) => {
    const classes = useStyles();

    function handleClose(event, reason) {
        setNotify({ ...notify, isOpen: false });
    }
    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
        >
            <Alert severity={notify.type} onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
