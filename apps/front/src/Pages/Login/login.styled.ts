import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const IllustrationSection = styled.div`
  width: 50%;
  background-color: #006d77;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: 90%;
  }
`;

export const FormSection = styled.div`
  width: 50%;
  background-color: #006d77;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #fff;
  height: 50%;
  width: 50%;
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
`;

export const FormFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
