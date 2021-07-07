import { TextField } from "@material-ui/core";

const Input = ({ name, label, value, onChange, error = null, helperText }) => {
    return (
        <div>
            <TextField
                label={label}
                value={value}
                name={name}
                variant="outlined"
                onChange={onChange}
                {...(error && { error: true, helperText: error })}
            />
        </div>
    );
};

export default Input;
