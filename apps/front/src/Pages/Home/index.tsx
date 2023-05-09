import { HomePageContainer, HomePageContent, NavBar } from './home.styled';
import { HomeIcon } from '../../../assets/homeIcon';
import { Button, Dropdown, Form, InputGroup, Table } from 'react-bootstrap';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GETUSERBYNAME, USERSLIST } from '../../schemas/Users/query';
import { User, Users } from '../../types/user';
import { UserTable } from '../../Components/UserTable';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { useState } from 'react';

export const HomePage = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const { loading, data, error, refetch } = useQuery<Users>(USERSLIST, {});
  const [
    GetUserByName,
    { loading: loadingSearch, data: searchResult, error: searchError },
  ] = useLazyQuery<Users>(GETUSERBYNAME, {});
  const navigate = useNavigate();
  const firstName = localStorage.getItem('firstName');

  let inputTimeout: any;

  const Logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const FindByName = () => {
    refetch({ firstName: searchInputValue });
  };

  const ResetSearchField = (value: string) => {
    console.log(value);
    setSearchInputValue(value);
    if (value === '') refetch({ firstName: '' });
  };

  return (
    <HomePageContainer>
      <NavBar>
        <div>
          <HomeIcon />
        </div>
        <div>
          <InputGroup>
            <Button
              onClick={() => FindByName()}
              variant="secondary"
              id="button-addon1"
            >
              Pesquisar
            </Button>
            <Form.Control
              onChange={({ target }) => ResetSearchField(target.value)}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary " id="dropdown-basic">
              <FaRegUserCircle size={25} />
              <span> Bem vindo , {firstName} </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as="button" onClick={() => Logout()}>
                Sair
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </NavBar>
      <HomePageContent>{data && <UserTable data={data} />}</HomePageContent>
    </HomePageContainer>
  );
};
