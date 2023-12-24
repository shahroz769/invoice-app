import "./css/login.css";
import Button from "../Components/Button";
import Input from "../Components/Input";
import logoLarge from "../assets/images/logo-invoice.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            userLogin();
        }
    };

    const loginUser = () => {
        console.log("Login User");
    };

    return (
        <div className="login-container">
            <div className="auth-logo">
                <img src={logoLarge} alt="Logo" />
            </div>
            <div className="login-card">
                <div className="login-head">
                    <h2>Login</h2>
                    <p>Add your details below to get back into the app</p>
                </div>
                <div className="login-fields">
                    <Input
                        onChange={null}
                        onBlur={null}
                        label="Email address"
                        placeholder="e.g. alex@email.com"
                        type="email"
                        onKeyDown={handleEnterKeyPress}
                    />
                    <Input
                        onChange={null}
                        onBlur={null}
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        onKeyDown={handleEnterKeyPress}
                    />

                    <Button
                        onClick={loginUser}
                        text="Login"
                        bgColor={"var(--1)"}
                    />
                    <p className="auth-para">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="create-account"
                        >
                            Create account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
