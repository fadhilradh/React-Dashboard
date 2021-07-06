import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@material-ui/core";

const Select = ({ name, label, value, onChange, options }) => {
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
