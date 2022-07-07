import React, { useEffect, useState } from 'react'

import axios from 'axios'
import '../../App.css';
import './Generator.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'


const Generator = (props) => {
    const [fetching, setFetching] = useState("false")

    useEffect(() => {
        const fetchData = async () => {
          const apiRoot = "https://api.giphy.com/v1/gifs/"
          const api_key = process.env.REACT_APP_GIPHY_KEY
          const result = await axios(`${apiRoot}random?api_key=${api_key}`)
          console.log(result)
          props.setGiphy(`${result.data.data.images.fixed_height.url}`)
          props.setTitle(`${result.data.data.title}`)
        };
        fetchData()
      }, [fetching]);

  return (
    <div className='generator-container'>
      <Card>
        <Card.Img 
            variant="top" 
            src={props.giphy} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Body>
          <Button 
          variant="dark"
          onClick={() => setFetching(!fetching)}
          >Click For Random GIPHY </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Generator
