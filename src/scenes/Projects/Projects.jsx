import React, {useEffect, useState} from 'react';
import {reactProjects} from './data.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import './Projects.css';

function Projects() {

  const [data, setData] = useState([]);
  const [isloaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() =>{
    fetchdata();
  }, [])

  const fetchdata = async () => { // api get reques goes here
    setIsLoaded(false);
    try { 
        setData(reactProjects)
        setIsLoaded(true);
    } catch (err) {
      console.log("Something went wrong: ", err);
      setIsError(true);
    }
  }

  if(isError) {
    return <>Something went wrong...</>
  }

  if(!isloaded) {
    return <Spinner />
  } 
  else {
    console.log(data);
    return (
      data.map(({id, name, description, type, url, favorite, show}) => {
        if(show){
          return (
            <article className="project-tile" key = {id}> 
              <h1> {name} </h1>
              <p> {description} </p>
              <p> {type} </p>
              <a href = {url}> Link </a>
            </article>
          );
        } else {
          return <></>
        }
      })

    );
  }


}

export default Projects;
