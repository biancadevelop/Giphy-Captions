import React from 'react'
import Generator from '../Generator/Generator'
import '../../App.css';
import {
  FacebookShareButton, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  InstapaperShareButton, InstapaperIcon,
  TwitterShareButton, TwitterIcon,
  EmailShareButton, EmailIcon

} from 'react-share'


const SocialShare = () => {
  return (
    <>
      <FacebookShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
      >
        <FacebookIcon logoFillColor="blue" round={true}></FacebookIcon>
      </FacebookShareButton>
    </>
  )
}

export default SocialShare
