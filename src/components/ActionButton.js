import { Button } from "@material-ui/core";

function ActionButton({ color, children, onClick }) {
    return <Button onClick={onClick}>{children}</Button>;
}

export default ActionButton;
