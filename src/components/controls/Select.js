import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@material-ui/core";

const Select = ({ name, label, value, onChange, options, error }) => {
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
