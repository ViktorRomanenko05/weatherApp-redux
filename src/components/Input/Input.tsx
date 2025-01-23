import "./styles.ts";
import { InputProps } from './types';
import { ErrorMessage, InputContainer, InputElement } from './styles';

function Input({ name, id, type = 'text', placeholder, value, onChange, error }: Readonly<InputProps>) {

    return (
        <InputContainer>
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
        </InputContainer>
    );
}

export default Input;