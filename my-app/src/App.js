import React from 'react';
import Name,{Counter} from './components'
import Api from './ApiComponent'
import logo from './logo.svg';
import './App.css';
import Search from './Search'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {
  const classes = useStyles();

  return (
    <div className="App">
    {/* <div>
    <h1> Hello World </h1>
    </div>
    <Name value={"Saurav"} otherVal={123}/>
    <Counter/>
    <Api></Api>
    <Search/> */}

<div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/name">Name</Link>
            </li>
            <li>
              <Link to="/counter/">Counter</Link>
            </li>
            <li>
              <Link to="/search/">Search</Link>
            </li>
          </ul>
        </nav>

        <Route path="/name" exact component={Name}/>
      <Route path="/counter/" exact component={Counter}/>
      <Route path="/search/" exact component={Search}/>
      </div>
    </Router>
 


    </div>
    
  );
}

// class Name extends React.Component {
//   render() {

//     let x
//     if(this.props.otherVal>100) {
//       x = "Greater than 100"
//     } else {
//       x = "Less than 100"
//     }


// return (

//     <div>
//       <h2> {this.props.value} </h2>
//       <div>{this.props.otherVal}</div>
//       <div>{x}</div>
//     </div>
// );
//       }

// }



export default App;
