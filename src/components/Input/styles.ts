import styled from '@emotion/styled';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;

export const InputElement = styled.input`
    width: 100%;
    height: 48px;
    padding: 12px 20px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    border: 1px solid white;
    border-radius: 50px;
    font-size: 16px;
    color: white;

    &::placeholder {
        color: lightgray;
    }
`;

export const ErrorMessage = styled.div`
    height: 18px;
    color: #F35E5E;
    font-size: 16px;
    padding-left: 18px;
`;