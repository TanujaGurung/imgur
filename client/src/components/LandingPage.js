import React, { Component } from 'react';
import "./LandingPage.css"
import {Link} from 'react-router-dom'


export default class LandingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className ="landing">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand"><Link to='/'><img src="https://i.imgur.com/cX0VsCp.jpg" alt="Logo" style={{width: "5rem"}}></img></Link></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
  
    <ul className="navbar-nav">
    <li style={{marginLeft: '100px'}}>
     <Link  to = "/post" >
     <button className="btn btn-primary" >
     <i class="fas fa-plus-square"> Add post</i>
     </button>
     </Link>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Sign In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign Out</a>
      </li>    
    </ul>
  </div>  
</nav>
            </div>
            
                
            </div>
        )
    }
}
