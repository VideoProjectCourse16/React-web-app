import React, { useEffect, useMemo, useState } from "react";
import './signup.css';
import FormControl from '@mui/material/FormControl';
import { Container, FormHelperText, Input, InputLabel, Paper } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import debounce from 'lodash.debounce'
import { useNavigate }from 'react-router-dom'
import { register } from "../../services/auth";



const Signup=()=>{
    const [name, setName]=useState('')
    const [surname, setSurname]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [repeatPassword, setRepeatPassword]=useState('')
    let navigate=useNavigate();
    const changeHandler1 = (event: any) => {
        setName(event.target.value);
    };
    const changeHandler2 = (event: any) => {
        setSurname(event.target.value);
    };
    const changeHandler3 = (event: any) => {
        setUsername(event.target.value);
    };
    const changeHandler4 = (event: any) => {
        setPassword(event.target.value);
    };
    const changeHandler5 = (event: any) => {
        setRepeatPassword(event.target.value);
    };
    const debouncedChangeHandler1 = useMemo( ()=>debounce(changeHandler1, 400), [name]);
    const debouncedChangeHandler2 = useMemo( ()=>debounce(changeHandler2, 400), [surname]);
    const debouncedChangeHandler3 = useMemo( ()=>debounce(changeHandler3, 400), [username]);
    const debouncedChangeHandler4 = useMemo( ()=>debounce(changeHandler4, 400), [password]);
    const debouncedChangeHandler5 = useMemo( ()=>debounce(changeHandler5, 400), [password]);



    const  signup= async()=>{
        register(name, surname, username, password, repeatPassword).then((_)=>navigate('/signin')).catch((err)=>{
            return err.message==='Request failed with status code 422' ? console.log(`Username ${username} already exists`) : navigate('/signin')
        })
    }
    // return  e===`Username ${username} already exists`? console.log('user exist'): `User ${username} succesfully registered!`;
    return(
        <Container  className="container" maxWidth="xs">
            <Paper  className="paper" elevation={10}>
                    <div className="imgContainer">
                        <img  className="imgItem" src="./assets/logo.png" alt="logo" />
                    </div>
                    <div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input   onChange={debouncedChangeHandler1}  type="text"  id="name" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your name.</FormHelperText>
                            </FormControl>
                        </div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Surname</InputLabel>
                                <Input   onChange={debouncedChangeHandler2}  type="text"  id="surname" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your surname.</FormHelperText>
                            </FormControl>
                        </div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input   onChange={debouncedChangeHandler3}  type="text"  id="user" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your username.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input  onChange={debouncedChangeHandler4} type="password" id="password" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">repeat Password</InputLabel>
                                <Input  onChange={debouncedChangeHandler5} type="password" id="repeatpassword" aria-describedby="my-helper-text" />
                            </FormControl>
                        </div>
                        <Stack >
                            <Button onClick={()=>signup()} style={{marginTop:20,textAlign:"center"}} variant="contained">SignUp</Button>
                        </Stack>
                            <h6 style={{textAlign:"center"}} >sei  già registrato ? Clicca su login</h6>
                        <Stack >
                            <Button onClick={()=>navigate("/signin")} style={{marginTop:20,textAlign:"center"}} variant="contained">Login</Button>
                        </Stack>
                    </div>
            </Paper>
        </Container>
    )

}
export default Signup;