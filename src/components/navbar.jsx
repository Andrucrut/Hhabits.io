import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./navbar.css";
import { logout } from "../services/auth_requests";
import { store } from "../redux/store";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userName = store.getState().userName;

    function onClick() {
        logout();
        navigate("/login");
    }

    return (
        <div className="navbar">
            <button className="menu-toggle" onClick={() => {
                document.querySelector('.links').classList.toggle('open');
                document.querySelector('.right').classList.toggle('open');
            }}>
                Menu
            </button>
            <div className="links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <span>Description</span>
                </Link>
                <Link
                    to="/theory"
                    className={location.pathname === "/theory" ? "active" : ""}
                >
                    <span>Theory</span>
                </Link>
                <Link
                    to="/habits"
                    className={location.pathname === "/habits" ? "active" : ""}
                >
                    <span>Habits</span>
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                >
                    <span>Contact</span>
                </Link>
            </div>
            <div className="right">
                {!store.getState().loggedIn && (
                    <div className="logReg">
                        <Link to="/reg" className={location.pathname === "/reg" ? "reg-link active" : "reg-link"}>
                            <AiOutlineUser size={24} />
                            <span>Registration</span>
                        </Link>
                        <Link to="/login" className={location.pathname === "/login" ? "login-link active" : "login-link"}>
                            <span>Login</span>
                        </Link>
                    </div>
                )}
                {store.getState().loggedIn && store.getState().userName != null && (
                    <div className="aut">
                        <div className="user">{userName.split('@')[0]}</div>
                        <button className="login-link active" onClick={onClick}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};
