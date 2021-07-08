import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import ActionButton from "./ActionButton";
import CloseIcon from "@material-ui/icons/Close";

const PopUpDialog = ({ title, children, openPopup, setOpenPopup }) => {
    return (
        <Dialog open={openPopup} maxWidth="xl">
            <DialogTitle>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>{title}</div>
                    <ActionButton
                        color="secondary"
                        onClick={() => setOpenPopup(false)}
                    >
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    );
};

export default PopUpDialog;
