import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'

export default class FetchAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    } 
   
    componentDidMount() {
        axios.get('http://localhost:9000/feeds')
        .then((res) => {
          this.setState({ apiResponse: res.data})
          console.log(this.state.apiResponse)
        })
        .catch(console.log)
      }
      // [...]
    
    render() {
        const {apiResponse}=this.state
        return(   
          <div className="container">
              <div className = "card-deck" style={{flexWrap:"wrap"}}>
              { apiResponse.length?
                apiResponse.map(apiResponse=><div>
                <Card url ={apiResponse.url}
               title ={apiResponse.title}
               views ={apiResponse.views}
                likes = {apiResponse.likes}  
                />
               </div>):null
            }
            
     </div>  
     </div>
     )
    }
}
