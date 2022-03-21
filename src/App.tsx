import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link, Outlet, Route, Routes }from 'react-router-dom'
import Home from './components/home/home';
import Category from './components/category/category';
import Favorite from './components/favorite/favorite';
import User from './components/profile/profile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
  
  return (
   <React.Fragment> 
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='toolbar'>
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          color="inherit"
        >
          <img className='logo' src="https://leganerd.com/wp-content/uploads/2020/10/primevideo-seo-logo-square-999x999.png" alt="" />
        </IconButton>
          <Typography variant="h6" noWrap component="li" sx={{mr: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/">Home</Link>
          </Typography>
          <Typography variant="h6" noWrap component="li" sx={{flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/favorite">Favorite</Link>
          </Typography>
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
          <Route  path='/' element={<Home />}/>
          <Route path="profile" element={<User />}/>
          <Route path="favorite" element={<Favorite />}/>
      </Routes>
</React.Fragment>
  );
}

export default App;
function rgba(arg0: number, arg1: number, arg2: number, arg3: number): import("csstype").Property.BackgroundColor | undefined {
  throw new Error('Function not implemented.');
}

