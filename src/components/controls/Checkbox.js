import { Checkbox as MuiCheckbox, FormControlLabel } from "@material-ui/core";

const Checkbox = ({ name, label, value, onChange }) => {
    const convertToDefaultParams = (name, value) => ({
        target: {
            name,
            value,
        },
    });

    return (
        <div>
            <FormControlLabel
                control={
                    <MuiCheckbox
                        checked={value}
                        onChange={(e) =>
                            onChange(
                                convertToDefaultParams(name, e.target.checked)
                            )
                        }
                        name={name}
                        color="primary"
                    />
                }
                label={label}
            />
        </div>
    );
};

export default Checkbox;
