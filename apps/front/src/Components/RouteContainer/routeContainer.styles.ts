import styled from 'styled-components';

export const RouterContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template-areas:
    'navBar navBar navBar'
    'contentArea contentArea contentArea';
`;

export const NavBarArea = styled.div`
  grid-area: navBar;
  background-color: red;
  width: 100%;
  height: 10vh;
`;

export const ContentArea = styled.div`
  grid-area: contentArea;
  padding: 32px;
  width: 100%;
  height: 90vh;
`;
