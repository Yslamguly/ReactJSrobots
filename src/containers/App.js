import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../App.css'
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {changeSearchField, selectSearcherField} from "../redux/searcher/searcherSlice";

const App = () => {
    const textFieldValue = useSelector(selectSearcherField)
    const dispatch = useDispatch()
    const [robots,setRobots] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=>response.json())
                .then(users=> {setRobots(users)});
    },[])
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(textFieldValue.toLowerCase())
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else if(!filterRobots.length){
            return (
                <div className={'tc'}>
                    <h1 className={'underline'}>ROBOFRIENDS</h1>
                    <SearchBox searchChange={(e)=>dispatch(changeSearchField(e.target.value))}/>
                    <h1>Nothing found</h1>
                </div>
            )
        }
        else
        {
            return(
                <div className={'tc'}>
                    <h1 className={'underline'}>ROBOFRIENDS</h1>
                    <SearchBox searchChange={(e)=>dispatch(changeSearchField(e.target.value))}/>
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






