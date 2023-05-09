import jwtDecode, { JwtPayload } from 'jwt-decode';

export const useTokenRole = () => {
  const token = localStorage.getItem('token');

  const UserIsAdmin = () => {
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role === 'userAdmin';
    }
    return false;
  };

  return {
    token,
    role: UserIsAdmin(),
  };
};
