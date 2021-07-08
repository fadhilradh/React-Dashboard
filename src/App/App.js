import "./App.css";
import Sidemenu from "../components/SideMenu";
import Header from "../components/Header";
import {
    createMuiTheme,
    CssBaseline,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core";

import Employees from "../pages/Employees";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#b3b5df",
        },
        secondary: {
            main: "#333996",
            light: "#52579d",
        },
        background: {
            default: "#e4e4e4",
        },
    },
    overrides: {
        MuiAppBar: {
            transform: "translateZ(0)",
        },
    },
    // props: {
    //     MuiIconButton: {
    //         disableRipple: true,
    //     },
    // },
});

const useStyles = makeStyles({
    appMain: {
        paddingLeft: "320px",
        width: "100%",
    },
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Sidemenu />
            <div className={classes.appMain}>
                <Header />

                <Employees />
            </div>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
