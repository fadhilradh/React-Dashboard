import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePicker = ({ name, label, value, onChange }) => {
    const convertToDefaultParams = (name, value) => ({
        target: {
            name,
            value,
        },
    });
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                inputVariant="outlined"
                margin="normal"
                label={label}
                format="MMM/dd/yyyy"
                value={value}
                name={name}
                onChange={(date) =>
                    onChange(convertToDefaultParams(name, date))
                }
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;
