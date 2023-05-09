export type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  age: string;
};

export type RegisterFormResponse = {
  createUser: {
    firstName: string;
    lastName: string;
    age: number;
    userId: string;
  };
};
