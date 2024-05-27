import { ChangeEvent, Fragment } from "react";
import "./index.scss";
import { IUserData } from "../interfaces";
import { formInputList } from "../../data";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const RegisterForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [address, setAddress] = useState("");

  // Collect all useState in one State
  // const [userData, setUserData] = useState({
  //   email: "",
  //   userName: "",
  //   password: "",
  //   address: "",
  // });

  console.log(userData);
  // Handler for onChange state
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // ** Generate dynamic inputs (Renders)
  const renderFormInputs = formInputList.map((input) => (
    <Fragment key={input.id}>
      <label htmlFor={input.name}>{input.label} </label>
      <input
        type={input.type}
        id={input.id}
        name={input.name}
        value={userData[input.name]}
        onChange={onChangeHandler}
      />
      <br />
    </Fragment>
  ));

  return (
    <>
      {/* <div style={{ margin: 15, textAlign: "start" }}>
        <h3>Your Email: {email}</h3>
      </div> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="container"
      >
        {renderFormInputs}
        <button type="submit" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
