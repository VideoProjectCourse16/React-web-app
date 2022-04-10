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
import Favorite from './pages/favorite/favorite';
import User from './pages/profile/profile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import { Button } from 'react-bootstrap';
import { useNavigate }from 'react-router-dom'
import SingleFilm from './pages/singleFilm/singleFIlm';
import MovieComponent from './pages/movies/movies';
import { getMovieByTitle } from './services/movies';
import { Movie, Movies, staticFilm } from './models/Movies';
import { movies } from './models/mock';
import debounce from 'lodash.debounce'
import { useFavorites } from './hooks/useFavorites';

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
  color:'black'
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
  const [filtFilms, setFiltFilms] = React.useState<Movies>([]);
  const {user} = useFavorites();
  //const [search, setSearch] = React.useState<Movies>()
  const navigate=useNavigate()

  const searchFilm = async(event: any) => {
    //const newSearch = await getMovieByTitle(term);
    //setFiltFilms(newSearch.data);
    let results: Movies = []
    event.target.value!='' && (results = movies.filter(({title})=>title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())));
    setFiltFilms(results);
  }

  const debouncedChangeHandler = React.useMemo( ()=>debounce(searchFilm, 500), []);

  // React.useEffect(()=>{
  //   searchFilm()
  // },[search])

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
          <Typography variant="h6" noWrap component="li" sx={{mr: 1, ml:2, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/movies">Home</Link>
          </Typography>
          <Typography variant="h6" noWrap component="li" sx={{flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link className='navLink' to="/favorite">Favorite</Link>
          </Typography>
            {!user && 
              <>
                <Button style={{color:"white", background:"red",marginRight: 10}}  onClick={()=>navigate("signup")}  variant="Outlined">Iscriviti</Button>
                <Button style={{color:"white", background:"red"}}  onClick={()=>navigate("signin")}  variant="Outlined">Login</Button>
              </>
            }
          <Search style={{background:"white"}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={debouncedChangeHandler}
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
          <Route  path='/movies'>
          <Route index element={<MovieComponent searchMovies={filtFilms} />}/>
          <Route path=':id' element={<SingleFilm />}/>
          </Route>
          <Route  path='*' element={<MovieComponent searchMovies={filtFilms}/>}/>
          
          <Route path="profile" element={<User />}/>
          <Route path="favorite" element={<Favorite />}/>
          <Route path="signin" element={<Signin />}/>
          <Route path="signup" element={<Signup />}/>
      </Routes>
</React.Fragment>

  );
}

export default App;

