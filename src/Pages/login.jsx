import { useState, useEffect } from "react";
import "./css/login.css";
import Input from "../Components/Input";
import logoLarge from "../assets/images/logo-invoice.svg";
import emailIcon from "../assets/images/icon-email.svg";
import passwordIcon from "../assets/images/icon-password.svg";

const Login = () => {
    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            userLogin();
        }
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
                        value={email}
                        error={emailError}
                        onInputChange={(emailVal) => setEmail(emailVal)}
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                    />
                    <Input
                        value={password}
                        error={passwordError}
                        onInputChange={(passVal) => setPassword(passVal)}
                        label="Password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="Enter your password"
                        onKeyPress={handleEnterKeyPress}
                    />

                    <Button
                        disabled={disable}
                        loadingText={disable && "Logging in..."}
                        handleClick={userLogin}
                        buttonText="Login"
                    />
                    {/* <div className="continue-socials">
                        <div className="line"></div>
                        <h3>Or continue with</h3>
                    </div>
                    <div className="login-socials">
                        <div className="login-with-google">
                            <img src={googleLogoIcon} alt="Google Logo" />
                            <h3>Google</h3>
                        </div>
                        <div className="login-with-github">
                            <img src={githubLogoIcon} alt="Github Logo" />
                            <h3>GitHub</h3>
                        </div>
                    </div> */}
                    <p>
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
