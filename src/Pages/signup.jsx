import { useEffect, useState } from "react";
import "./css/signup.css";
import Input from "../Components/Input";
import logoLarge from "../assets/images/logo-invoice.svg";
import emailIcon from "../assets/images/icon-email.svg";
import passwordIcon from "../assets/images/icon-password.svg";
import userIcon from "../assets/images/icon-username.svg";

const Signup = () => {
    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            userSignUp();
        }
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
                        value={""}
                        error={emailError || false}
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                        onInputChange={(emailVal) => setEmail(emailVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <Input
                        value={userName}
                        error={userNameError || false}
                        label="User name"
                        iconSrc={userIcon}
                        altText="user name"
                        placeholderText="At least 6 characters"
                        onInputChange={(userVal) => setUserName(userVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <Input
                        value={password}
                        error={passwordError || false}
                        label="Create password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="At least 8 characters"
                        onInputChange={(passVal) => setPassword(passVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <Input
                        value={repeatPassword}
                        error={repeatError || false}
                        label="Confirm password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Confirm Password"
                        placeholderText="At least 8 characters"
                        onInputChange={(repPassVal) =>
                            setRepeatPassword(repPassVal)
                        }
                        onKeyPress={handleEnterKeyPress}
                    />

                    <Button
                        disabled={disable}
                        loadingText={disable && "Signing up..."}
                        handleClick={userSignUp}
                        buttonText="Signup"
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
