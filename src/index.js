import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Snowflake from './Snowflake';
import '/style.css';




class Snow extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Snowflakes</h2>
        <Snowflake />
      </div>
    );
  }
}


ReactDOM.render(
  <BrowserRouter>
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <ul className="navbar-start">
           
            <li className="navbar-item"><Link to="/snowflake">Snowflakes</Link></li>
           
        </ul>
    </nav>
        <hr/>
    
        <Route exact path="/snowflake" component={Snow}/>
      
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);