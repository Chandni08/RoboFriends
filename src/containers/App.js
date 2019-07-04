import React,{Component} from 'react';
import {robots} from'./robots';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>{this.setState({robots:users})});
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(robots.length==0){
            return <h1>LOADING</h1>;
        }
        return (
            <div className="tc">
                <h1 className="f1"><font color="white">ROBOFRIENDS</font></h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            
        );
    }
}


export default App;