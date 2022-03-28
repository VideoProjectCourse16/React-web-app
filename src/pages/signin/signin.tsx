import React, { useCallback, useEffect, useMemo, useState } from "react";
import './signin.css';
import FormControl from '@mui/material/FormControl';
import { Container, FormHelperText, Input, InputLabel, Paper } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import debounce from 'lodash.debounce'
import { useNavigate }from 'react-router-dom'
import { login } from "../../services/auth";


const Signin=()=>{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [accessToken, setAccessToken]=useState('')


useEffect(()=>{
    localStorage.setItem('accessToken', accessToken)
},[accessToken])



    let navigate=useNavigate();
    const changeHandler = (event: any) => {
        setUsername(event.target.value);
    };
    const changeHandler2 = (event: any) => {
        setPassword(event.target.value);

    };
    const debouncedChangeHandler = useMemo( ()=>debounce(changeHandler, 400), [username]);
    const debouncedChangeHandler2 = useMemo( ()=>debounce(changeHandler2, 400), [password]);
    
    const signin= async()=>{
        login(username, password).then(({data})=>{
            if(data.message==='Succesfully logged in!'){
                setAccessToken(data.user.token);
                console.log(data.message);
                navigate('/home')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <Container  className="signin-container" maxWidth="xs">
            <Paper  className="paper" elevation={10}>
                    <div className="imgContainer">
                        <img  className="imgItem" src="./assets/logo.png" alt="logo" />
                    </div>
                    <div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input   onChange={debouncedChangeHandler}  type="email"  id="email" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your Uaername.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input  onChange={debouncedChangeHandler2} type="password" id="password" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                            </FormControl>
                        </div>
                        <Stack >
                            <Button onClick={()=>signin()} style={{marginTop:20,textAlign:"center"}} variant="contained">Sign in</Button>
                        </Stack>
                            <h4 style={{textAlign:"center"}} >Non sei registrato ?</h4>
                        <Stack >
                            <Button onClick={()=>navigate("/signup")} style={{marginTop:20,textAlign:"center"}} variant="contained">Registrati</Button>
                        </Stack>
                    </div>
            </Paper>
        </Container>
    )

}
export default Signin;