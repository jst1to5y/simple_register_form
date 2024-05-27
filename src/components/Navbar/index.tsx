import "./index.scss";

const styles = {
  List: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
  },
  ListStyle: {
    textDecoration: "none",
    fontSize: 20,
  },
};

interface IProps {
  companyTxt: string;
  aboutTxt: string;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const Navbar = ({ companyTxt, aboutTxt, isLogin, setIsLogin }: IProps) => {
  return (
    <nav>
      <ul className="nav-list" style={styles.List}>
        <li>
          <a className="nav-link" style={styles.ListStyle} href="/">
            {companyTxt}
          </a>
        </li>

        <li>
          <a className="nav-link" style={styles.ListStyle} href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" style={styles.ListStyle} href="/">
            {aboutTxt}
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "LOGOUT" : "LOGIN"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
