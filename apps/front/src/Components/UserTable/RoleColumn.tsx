import { Form } from 'react-bootstrap';
import { Role } from '../../enums/role.enums';
import { ServerError, useMutation } from '@apollo/client';
import { UPDATEUSERPROFILE } from '../../schemas/Users/mutation';

import { useState } from 'react';
import { toast } from 'react-toastify';

interface RoleColumnProps {
  isAdmin: boolean;
  role: string;
  id: string;
}

export const RoleColumn = ({ isAdmin, role, id }: RoleColumnProps) => {
  const [updateRole, { data, error, loading }] = useMutation(UPDATEUSERPROFILE);
  const [resetSelectedOption, setResetSelectedOption] = useState(false);

  const DispatchUpdateRole = (newRole: string) => {
    setResetSelectedOption(false);
    updateRole({
      variables: { id: id, newRole: newRole },
      onCompleted: (data) => {
        toast.success('Usuário Atualizado');
      },
      onError: async ({ networkError, message, extraInfo, graphQLErrors }) => {
        if (graphQLErrors.length > 0) {
          graphQLErrors.map((error) => toast.error(error.message));
        }

        setResetSelectedOption(true);
      },
    });
  };

  if (isAdmin) {
    return (
      <td>
        <Form.Select
          onChange={({ target }: any) => DispatchUpdateRole(target.value)}
        >
          <option selected={resetSelectedOption}>{role}</option>
          <option>{role === Role.ADMIN ? 'user' : 'userAdmin'}</option>
        </Form.Select>
      </td>
    );
  }
  return <td> {role} </td>;
};
