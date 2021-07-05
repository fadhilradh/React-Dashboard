import { TextField } from "@material-ui/core";

const Input = ({ name, label, value, onChange }) => {
    return (
        <div>
            <TextField
                label={label}
                value={value}
                name={name}
                variant="outlined"
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
