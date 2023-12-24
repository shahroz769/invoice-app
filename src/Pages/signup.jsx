import "./css/signup.css";
import Input from "../Components/Input";
import logoLarge from "../assets/images/logo-invoice.svg";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            userSignUp();
        }
    };

    const userSignUp = () => {
        console.log("Sign up user");
    };

    return (
        <div className="signup-container">
            <div className="auth-logo">
                <img src={logoLarge} alt="Logo" />
            </div>
            <div className="signup-card">
                <div className="signup-head">
                    <h2>Create account</h2>
                    <p>Let’s get you started sharing your links!</p>
                </div>
                <div className="signup-fields">
                    <Input
                        // value={""}
                        label="Email address"
                        placeholder="e.g. alex@email.com"
                        onKeyDown={handleEnterKeyPress}
                        type="email"
                    />
                    <Input
                        label="Create password"
                        type="password"
                        placeholder="At least 8 characters"
                        onKeyDown={handleEnterKeyPress}
                    />
                    <Input
                        label="Confirm password"
                        type="password"
                        placeholder="At least 8 characters"
                        onKeyDown={handleEnterKeyPress}
                    />

                    <Button
                        onClick={userSignUp}
                        text="Sign up"
                        bgColor={"var(--1)"}
                    />
                    <p className="auth-para">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="create-account"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
