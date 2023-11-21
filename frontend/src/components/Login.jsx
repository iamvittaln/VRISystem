import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import {
    AccountCircle,
    Lock,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [pageType, setPageType] = useState("signin");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSignin = (event) => {
        event.preventDefault();
        if (pageType === "register") {
            navigate("/dashboard", {
                state: { username: username, password: password },
            });
        } else {
            if (username === "vri_admin" && password === "vittaln") {
                navigate("/dashboard", {
                    state: { username: username, password: password },
                });
            } else {
                setPasswordError("Invalid credentials");
            }
        }
    };

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleClickShowPassword2 = () => setShowPassword2((prev) => !prev);

    const checkValidUsername = () => {
        return username.length >= 1 && username.length <= 6;
    };

    const checkValidPassword = () => {
        return password.length >= 1 && password.length <= 6;
    };

    return (
        <>
            <NavBar home="Home" status="Status" aboutus="About Us" login="Login" />
            <div className={styles.login__body}>
                <div className={styles.login__form}>
                    <form onSubmit={handleSignin} className={styles.loginForm}>
                        <TextField
                            error={checkValidUsername()}
                            helperText={
                                checkValidUsername()
                                    ? "Username must have at least 6 characters!"
                                    : ""
                            }
                            label="Username"
                            variant="outlined"
                            className={styles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mt: 4, width: "100%" }}
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <TextField
                            error={checkValidPassword()}
                            helperText={
                                checkValidPassword()
                                    ? "Password must have at least 6 characters!"
                                    : ""
                            }
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            className={styles.textField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton onClick={handleClickShowPassword}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mt: 4, width: "100%" }}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        {pageType === "register" && (
                            <TextField
                                error={passwordError}
                                helperText={passwordError ? "" : passwordError}
                                label="Confirm Password"
                                type={showPassword2 ? "text" : "password"}
                                variant="outlined"
                                className="textField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={handleClickShowPassword2}>
                                                {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mt: 4, width: "100%" }}
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                            />
                        )}

                        {passwordError && (
                            <p style={{ color: "red", marginTop: "10px" }}>
                                {passwordError}
                            </p>
                        )}

                        <input
                            type="submit"
                            value={pageType === "register" ? "Register" : "Login"}
                            style={{ marginTop: "10px" }}
                        />

                        <p style={{ marginTop: "10px" }}>
                            {pageType === "signin"
                                ? "Don't have an account?"
                                : "Already have an account?"}{" "}
                            <span>
                                <button
                                    className="login__page__button"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setPageType((prev) =>
                                            prev === "signin" ? "register" : "signin"
                                        );
                                    }}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        color: "rgb(98, 162, 219)",
                                    }}
                                >
                                    {pageType === "signin" ? "Register" : "Signin"}
                                </button>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
