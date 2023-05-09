export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile: UserProfile;
  age: number;
};

export type Users = {
  users: User[];
};

export type UserProfile = {
  role: string;
};
