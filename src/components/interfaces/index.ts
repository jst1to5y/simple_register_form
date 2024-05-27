export interface IUserData {
  email: string;
  userName: string;
  password: string;
  address: string;
  phone: string;
  fullName: string;
}

export interface IFormInputs {
  label: string;
  type: string;
  id: string;
  name: keyof IUserData;
}
