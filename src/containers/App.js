import React, {useEffect, useState} from "react";
import '../App.css'
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {

    const [searchField, setSearchField] = useState('');
    const [robots,setRobots] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=>response.json())
                .then(users=> {setRobots(users)});
    },[])
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
                    <SearchBox searchChange={(event) => setSearchField(event.target.value)}/>
                    <h1>Nothing found</h1>
                </div>
            )
        }
        else
        {
            return(
                <div className={'tc'}>
                    <h1 className={'underline'}>ROBOFRIENDS</h1>
                    <SearchBox searchChange={(event) => setSearchField(event.target.value)}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
export default App;






