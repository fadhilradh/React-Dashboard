import { Button as MuiButton } from "@material-ui/core";

const Button = ({ variant, label, color, onClick, size, ...other }) => {
    return (
        <MuiButton
            size={size || "large"}
            onClick={onClick}
            color={color || "primary"}
            variant={variant || "contained"}
            {...other}
        >
            {label}
        </MuiButton>
    );
};

export default Button;
