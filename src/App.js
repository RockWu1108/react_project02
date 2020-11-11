
import React ,{Component} from "react";
import Axios from "axios";
export default class App extends  Component{

    state = {
        repName : '' ,
        repUrl : ''
    }

    componentDidMount() {
        const url = "https://api.github.com/search/repositories?q=re&sort=stars"

        // 1. 使用Axios發送異步ajax請求
        Axios.get(url).then(response =>{
            //console.log(response);
            const result = response.data
            const {name , html_url}= result.items[0];
            this.setState({repName :name , repUrl : html_url})
        }).catch((error) =>{
            alert(error.message)
        })

        //2. 使用fetch發送異步ajax請求
        // fetch(url)
        //     .then(response =>{
        //         return response.json()
        //     })
        //     .then(data =>{
        //         console.log(data)
        //         const {name , html_url}= data.items[0];
        //         this.setState({repName :name , repUrl : html_url})
        //     })

    }
    render() {
        const {repName , repUrl} = this.state

        if(!repName) {
            return <h2>Loading.......</h2>
        }
        else{
            return <h2> most start rep is <a href={repUrl}>{repName}</a></h2>
        }
    }
}

