import { Form, Table } from 'react-bootstrap';
import { User, Users } from '../../types/user';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useTokenRole } from '../../hooks/useTokenRole';
import { RoleColumn } from './RoleColumn';

interface UserTableProps {
  data: Users;
}

export const UserTable = ({ data }: UserTableProps) => {
  const { role } = useTokenRole();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th> Admin </th>
        </tr>
      </thead>
      <tbody>
        {data.users.map((user: User) => (
          <tr>
            <td> {user.firstName} </td>
            <td> {user.lastName} </td>
            <td> {user.email} </td>
            <RoleColumn isAdmin={role} role={user.profile.role} id={user.id} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
