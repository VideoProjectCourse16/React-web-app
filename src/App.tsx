import './App.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Link, Route, Routes }from 'react-router-dom'
import Home from './pages/home/home';
import Favorite from './pages/favorite/favorite';
import User from './pages/profile/profile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import { Button } from 'react-bootstrap';
import { useNavigate }from 'react-router-dom'
import SingleFilm from './pages/singleFilm/singleFIlm';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
function App() {
  let navigate=useNavigate()
  return (
   

    
  <React.Fragment> 
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className='dim-nav'>
      <Toolbar className='toolbar'>
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          color="inherit"
        >
          <img className='logo' src="./assets/logo.png" alt="" />
        </IconButton>
          <Typography variant="h6" noWrap component="li" sx={{mr: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/">Home</Link>
          </Typography>
          <Typography variant="h6" noWrap component="li" sx={{flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/favorite">Favorite</Link>
          </Typography>
          <Button style={{color:"white", background:"red"}}  onClick={()=>navigate("/signup")}  variant="Outlined">Iscriviti</Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Typography variant="h6" noWrap component="li" sx={{ml: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link  className='navLink' to="/profile"> <AccountCircleIcon fontSize='large'/> </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
      <Routes>
          <Route  path='/home'>
            <Route index element={<Home />}/>
            <Route path=':id' element={<SingleFilm />}/>
          </Route>
          <Route  path='*' element={<Home />}/>
          <Route path="profile" element={<User />}/>
          <Route path="favorite" element={<Favorite />}/>
          <Route path="signin" element={<Signin />}/>
          <Route path="signup" element={<Signup />}/>
      </Routes>
</React.Fragment>

  );
}

export default App;

