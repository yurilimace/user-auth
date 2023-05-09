export type LoginForm = {
  email: string;
  password: string;
};

export type LoginFormResponse = {
  response: {
    firstName: string;
    lastName: string;
    token: string;
  };
};
