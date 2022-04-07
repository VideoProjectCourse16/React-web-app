import React, { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import "./signup.css";
import FormControl from "@mui/material/FormControl";
import {
  Container,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth";

const Signup = () => {
  const preRegisterUser = {
    name: "",
    surname: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
  const [user, setUser] = useState({ ...preRegisterUser });

  let navigate = useNavigate();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setUser({ ...user, [name]: value });
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 400),
    [user]
  );

  const signup = () => {
    register(
      user.name,
      user.surname,
      user.username,
      user.password,
      user.repeatPassword
    )
      .then((_) =>{ 
          navigate("/signin")
          console.log(`Username ${user.username} registered succefully`)
    }).catch((err) => {
        return err.message === "Request failed with status code 422"
          ? console.log(`Username ${user.username} already exists`)
          : navigate("/signin");
      });
  };
  // return  e===`Username ${username} already exists`? console.log('user exist'): `User ${username} succesfully registered!`;
  return (
    <Container className="signup-container" maxWidth="xs">
      <Paper className="paper" elevation={10}>
        <div className="imgContainer">
          <img className="imgItem" src="./assets/logo.png" alt="logo" />
        </div>
        <div>
          <div className="formItem">
            <FormControl required={true}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                onChange={debouncedChangeHandler}
                type="text"
                name="name"
                id="name"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your name.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="formItem">
            <FormControl required={true}>
              <InputLabel htmlFor="my-input">Surname</InputLabel>
              <Input
                onChange={debouncedChangeHandler}
                type="text"
                name="surname"
                id="surname"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your surname.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="formItem">
            <FormControl required={true}>
              <InputLabel htmlFor="my-input">Username</InputLabel>
              <Input
                onChange={debouncedChangeHandler}
                type="text"
                name="username"
                id="user"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your username.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="formItem">
            <FormControl required={true}>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input
                onChange={debouncedChangeHandler}
                type="password"
                name="password"
                id="password"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your password.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="formItem">
            <FormControl required={true}>
              <InputLabel htmlFor="my-input">repeat Password</InputLabel>
              <Input
                onChange={debouncedChangeHandler}
                type="password"
                name="repeatPassword"
                id="repeatpassword"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </div>
          <Stack>
            <Button
              onClick={() => signup()}
              style={{ marginTop: 20, textAlign: "center" }}
              variant="contained"
            >
              SignUp
            </Button>
          </Stack>
          <h6 style={{ textAlign: "center" }}>sei già registrato ?</h6>
          <Stack>
            <Button
              onClick={() => navigate("/signin")}
              style={{ marginTop: 20, textAlign: "center" }}
              variant="contained"
            >
              Login
            </Button>
          </Stack>
        </div>
      </Paper>
    </Container>
  );
};
export default Signup;
