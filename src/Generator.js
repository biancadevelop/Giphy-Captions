import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'


const Generator = () => {
    const [giphy, setGiphy] = useState("")
    const [fetching, setFetching] = useState("false")

    useEffect(() => {
        const fetchData = async () => {
          const apiRoot = "https://api.giphy.com/v1/gifs/"
          const api_key = process.env.REACT_APP_GIPHY_KEY
          const result = await axios(`${apiRoot}random?api_key=${api_key}`)
          setGiphy(`${result.data.data.images.fixed_height.url}`)
        };
        fetchData()
      }, [fetching]);

  return (
    <div className='main-container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img 
            variant="top" 
            src={giphy} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Fetch Random Giphy Images On Click
          </Card.Text>
          <Button 
          variant="primary"
          onClick={() => setFetching(!fetching)}
          >Next</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Generator
