import { Button } from "@mui/material";

interface ButtonProps {
    buttonText: string
};

function CustomButton(buttonProps: ButtonProps) {

    return (
        <Button onClick={() => console.log(buttonProps.buttonText)}>
            {buttonProps.buttonText}
        </Button>
        )
}

export default CustomButton;