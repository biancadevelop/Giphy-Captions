import React from 'react'

import '../../App.css';
import './SocialShare.css'
import {
  FacebookShareButton, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon,
  RedditShareButton, RedditIcon,
  EmailShareButton, EmailIcon

} from 'react-share'


const SocialShare = (props) => {

    const title = 'Check out this GIPHY!'
    
    
  return (
    <div className='social-share-container'>
        <h4>Share:</h4>
        <FacebookShareButton 
        url={props.giphy}
        quote={title}
        hashtag="#GIPHY"
        >
            <FacebookIcon size={40} round={true}></FacebookIcon>
        </FacebookShareButton>

        <WhatsappShareButton 
        title={title}
        url={props.giphy}
        >
            <WhatsappIcon size={40} round={true}></WhatsappIcon>
        </WhatsappShareButton>

        <TwitterShareButton 
        title={title}
        hashtags={["GIPHY"]}
        url={props.giphy}
        >
            <TwitterIcon size={40} round={true}></TwitterIcon>
        </TwitterShareButton>

        <RedditShareButton 
        title={title}
        url={props.giphy}
        >
            <RedditIcon size={40} round={true}></RedditIcon>
        </RedditShareButton>

        <EmailShareButton
        subject={title}
        body={props.title}
        separator='-----'
        url={props.giphy}
        >
            <EmailIcon size={40} round={true}></EmailIcon>
        </EmailShareButton>
    </div>
  )
}

export default SocialShare
