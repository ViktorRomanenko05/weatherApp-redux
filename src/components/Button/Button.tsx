import "./styles.ts";
import {ButtonProps} from "./types";
import {MainButton} from './styles';

function Button({
                    name,
                    type = "button",
                    onClick,
                    disabled = false,
                    loading = false,
                    spinner,
                    backgroundColor
                }: Readonly<ButtonProps>) {

    return (
        <MainButton onClick={onClick} type={type} disabled={(disabled || loading)} backgroundColor={backgroundColor}>
            {loading ? spinner : name}
        </MainButton>
    );
}

export default Button;