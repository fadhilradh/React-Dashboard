import {
    AppBar,
    Badge,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
    },
    searchInput: {
        opacity: "0.6",
        padding: "4px 8px",
        fontSize: "0.8rem",
        borderRadius: "999px",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        },
        "& .MuiSvgIcon-root": {
            marginRight: "8px",
        },
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            startAdornment={<SearchIcon />}
                        />
                    </Grid>
                    <Grid sm item></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
