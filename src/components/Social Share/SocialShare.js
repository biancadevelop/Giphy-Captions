import React from 'react'
import Generator from '../Generator/Generator'
import '../../App.css';
import './SocialShare.css'
import {
  FacebookShareButton, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon,
  RedditShareButton, RedditIcon,
  EmailShareButton, EmailIcon

} from 'react-share'


const SocialShare = () => {
  return (
    <>
        <span>Share:</span>
        <FacebookShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
        >
        <FacebookIcon logoFillColor="blue" round={true}></FacebookIcon>
        </FacebookShareButton>

        <WhatsappShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
        >
        <WhatsappIcon round={true}></WhatsappIcon>
        </WhatsappShareButton>

        <TwitterShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
        >
        <TwitterIcon round={true}></TwitterIcon>
        </TwitterShareButton>

        <RedditShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
        >
        <RedditIcon round={true}></RedditIcon>
        </RedditShareButton>

        <EmailShareButton 
        url="https://google.com"
        quote={"Check out this GIPHY!"}
        hashtag="#GIPHY"
        >
        <EmailIcon round={true}></EmailIcon>
        </EmailShareButton>
    </>
  )
}

export default SocialShare
