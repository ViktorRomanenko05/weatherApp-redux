import styled from '@emotion/styled';

export const SpinnerComponent = styled.div`
 border: 4px solid rgba(0,0,0,0.1);
 border-left-color: #E6E6E3;
 border-radius: 50%;
 width: 30px;
 height: 30px;
 animation: spin 1s linear infinite;

 @keyframes spin {
  to {
    transform: rotate(360deg);
  }
 }
`