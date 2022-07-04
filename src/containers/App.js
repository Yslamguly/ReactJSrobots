import React,{Component}from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor() {
        super()
        this.state={
            robots:[],
            searchField:''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    render(){
        const {robots,searchField} = this.state;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else if(!filterRobots.length){
            return (
                <div className={'tc'}>
                    <h1 className={'underline'}>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h1>Nothing found</h1>
                </div>
            )
        }
        else
        {
            return(
                <div className={'tc'}>
                    <h1 className={'underline'}>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;