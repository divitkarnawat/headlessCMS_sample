import React, { Component } from 'react';
import axios from 'axios';

class Testing extends Component{
    
    state={
        data: [],
        isLoaded: false
    };

    componentDidMount()
    {
        axios.get('/wp-json/wp/v2/pages/?slug="sample-page"').then((res)=>{
            this.setState(
                {
                    data: res.data,
                    isLoaded: true
                }
            )
        }).catch((err)=>
        {
            console.log(err);
        }
        );
    }
    
    render()
    {
        const data = this.state.data[0];
        let title = "", content = "";
        if(this.state.isLoaded)
        {
            title = data.title.rendered;
            content = data.content.rendered;
        }
        return(
            <div>
                <h1> You are in Testing Component</h1>
                <h2> {title}</h2>
                <div dangerouslySetInnerHTML = {{__html: content}}></div>
            </div>

        );
       
    }
}



export default Testing;