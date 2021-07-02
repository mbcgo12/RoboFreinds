import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import ErrorBoundry from '../components/ErrorBoundry';
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
        const { robots,searchfield } = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <h1>Loding</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFreinds</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={ filteredRobots }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );                
    }  
}

export default App;