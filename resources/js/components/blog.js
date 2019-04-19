import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Blog extends Component {
    constructor(){
        super();
        this.state={
            blogs:[]
        }
    }
    componentWillMount(){
        axios.get('/api/blog').then(response=>{
            this.setState({
                blogs: response.data
            });
        }).catch(errors=>{
            console.log(errors);
        })
    }
    render() {
        return (
            <div className="container">
               {this.state.blogs.map(blogs=><li key={blogs.id}>{blogs.body}</li>)}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
