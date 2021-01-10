import React, { Component } from 'react'
import axios from 'axios'

export default class Upload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            url: '',
            views: '0',
            likes: '0'
        }
        this.ChangeHandler = this.ChangeHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }
    ChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    SubmitHandler = (e) => {

        e.preventDefault();
        const feed = {
            title: this.state.title,
            url: this.state.url,
            views: this.state.views,
            likes: this.state.likes
        }
        const options = { 
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
               body: JSON.stringify(feed)
          
          }  
          if(this.state.title && this.state.url && this.state.likes && this.state.views ){
            fetch("http://localhost:9000/feeds", options)
            .then(res => {
              console.log(res);
             // this.setState({redirect: true});
            })
          }else {
            console.log("The form is not valid to be sent")
          }
          /*
       fetch('http://localhost:9000/feeds', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feed),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
          axios.post("http://localhost:9000/feeds", feed)
           .then(res => console.log(res))
           .catch(err => console.log(err))
           console.log(this.state)  
          
        if(this.state.title && this.state.url && this.state.likes && this.state.views ){
            axios.post("https://localhost:9000/feeds", feed)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            console.log(this.state)
        }
        */ 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <div >
                        <label >title:</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.ChangeHandler}></input>
                    </div>
                    <div >
                    <label >url:</label>
                    <input type="text" name="url" value={this.state.url} onChange={this.ChangeHandler}></input>
                </div>
                
                   

                    <button type="submit" >Submit</button>

                </form>
            </div>
        )
    }
}
