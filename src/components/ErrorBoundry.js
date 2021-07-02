// import { render } from '@testing-library/react';
import React , {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasEroor: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({hasEroor:true})
    }

    render(){
        if(this.state.hasEroor){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    }
}



export default ErrorBoundry;