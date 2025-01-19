import "./styles.ts";
import { InputProps } from './types';
import { ErrorMessage, InputContainer, InputElement } from './styles';

function Input({ name, id, type = 'text', placeholder, value, onChange, error }: Readonly<InputProps>) {
    // console.log("Input render or re-render");

    return (
        <InputContainer>
            {/* Пример оператора условного рендеринга */}
            {/*{label && <Label htmlFor={id}>{label}</Label>}*/}
            <InputElement
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input-element"
            />
            <ErrorMessage>{error}</ErrorMessage>
             {/*{error && <ErrorMessage>{error}</ErrorMessage>}*/}
        </InputContainer>
    );
}

export default Input;