import { Fragment } from "react";
import React, { useState } from 'react';

// import {Link} from 'react-router-dom';

const Card = (props) => {
    let initial_count = parseInt(props.likes);
    const [count, setCount] = useState(initial_count);

    return (

        <React.Fragment>
            <div className="card" style={{ width: "12rem" }}>
                <img className="card-img-top" src={props.url} alt="Card image cap" style={{ height: "15rem" }} />
                
                    <h5 className="card-title">{props.title}</h5>
            
                <nav className="nav">
                <a className="nav-link active" ><i class="far fa-thumbs-up" onClick={() => setCount(count +1)}>{count}</i></a>
                <a className="nav-link" ><i className="far fa-comment"  >{props.likes}</i></a>
                <a className="nav-link" ><i className="far fa-eye">{props.views}</i></a>
                
              </nav>
               
            </div>
           
            <br></br>
        </React.Fragment>

    )

}
export default Card;

