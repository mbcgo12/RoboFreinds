import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './app.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''            
        }        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respones=>respones.json())
        .then(user=>this.setState({ robots: user }))        
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})        
    }

    render(){
        
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1>Loding</h1>
        }else{         
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFreinds</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Cardlist robots={ filteredRobots }/>
                </div>
            );
        }        
    }  
}

export default App;