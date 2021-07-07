import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup,
} from "@material-ui/core";

const RadioGroup = ({ name, label, value, onChange, items }) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row name={name} value={value} onChange={onChange}>
                {items.map((item, index) => (
                    <FormControlLabel
                        key={index}
                        value={item.id}
                        control={<Radio color="primary" />}
                        label={item.title}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};

export default RadioGroup;
