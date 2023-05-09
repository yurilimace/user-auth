import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-areas:
    'navbar '
    'homepagecontent';
  grid-template-rows: 8vh 92vh;
`;

export const NavBar = styled.div`
  grid-area: navbar;
  background-color: #006d77;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    flex: 15;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 60%;
    }
  }

  & > :first-child {
    margin-right: 10px;
    flex: 1;
    padding: 0 16px;
    > svg {
      height: 7vh;
    }
  }

  & > :last-child {
    flex: 2;
  }
`;

export const HomePageContent = styled.div`
  grid-area: homepagecontent;
  background-color: bisque;
  padding: 16px 32px;
`;
