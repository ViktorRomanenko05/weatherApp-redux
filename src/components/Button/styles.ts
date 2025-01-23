import styled from '@emotion/styled';

interface MainButtonProps {
    disabled: boolean;
    backgroundColor?: string;
    border?: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    outline: none;
    background: ${({disabled, backgroundColor}) => disabled ? '#b8b6ae' : (backgroundColor || '#1f27f5')};
    border-radius: 50px;
    border: ${({border})=> border? ("1px solid white"): "none"};
    color: white;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 18px;
    cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
    &:hover {
        background: ${({ disabled }) => (disabled ? "#b8b6ae" : "#4792C6")};
        border: none;
    }
`;