import { IUserData } from "./interfaces";

interface IProps {
  user: IUserData;
}
export const UserDetails = ({ user }: IProps) => {
  return (
    <div style={{ margin: 30, textAlign: "start" }}>
      <h3>Email: {user.email}</h3>
      <h3>Full Name: {user.fullName}</h3>
      <h3>Username: {user.userName}</h3>
      <h3>Address: {user.address}</h3>
    </div>
  );
};
