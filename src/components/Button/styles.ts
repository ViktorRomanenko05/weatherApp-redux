import styled from '@emotion/styled';

interface MainButtonProps {
    disabled: boolean;
    backgroundColor?: string;
}

export const MainButton = styled.button<MainButtonProps>`
    width: 100%;
    height: 48px;
    outline: none;
    border: none;
    //padding: 20px;
    background: ${({disabled, backgroundColor}) => disabled ? '#b8b6ae' : (backgroundColor || '#1f27f5')};
    border-radius: 50px;
    color: white;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 18px;
    cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
    &:hover {
        background: #4792C6;
    }
`;