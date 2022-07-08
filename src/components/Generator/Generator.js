import React, { useEffect, useState } from 'react'

import axios from 'axios'
import '../../App.css';
import './Generator.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'

// Props passed from App.js is being set to the Giphy url & Title
const Generator = (props) => {

// On click this fetching state changes which runs our useEffect to make the API call to Giphy
    const [fetching, setFetching] = useState("false")

// Using axios to fetch the data from giphy api to send random giph
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
          onClick={() => setFetching(!fetching)}
          >Click For Random GIPHY </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Generator
