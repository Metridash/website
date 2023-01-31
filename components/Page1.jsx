import React from 'react';
import "./Page1.css";
import image1 from "./Images/Screenshot1.png";
import image2 from "./Images/Screenshot5.png";
import image3 from "./Images/Screenshot2.png";

function Page1() {
  return (
    <div className='pageContainer'>
        <div className='pageFlex'>
            <div className='pageText'>
                <h3 className='pageHeading'>Identify your top posts in seconds</h3>
                <p className='pagePara'>Understand how your profile performs, how engaging it is, and how often your videos get likes and comments with TikTok user analytics.That’s not all! Unlock posting recommendations to increase engagement too.</p>
                <button className='pageButton'>DISCOVER YOUR TOP POSTS</button>
            </div>
            <div>
                <img src={image1} alt="image" className='pageImage'  />
            </div>
        </div>
        <div className='pageFlex'>
            <div>
                <img src={image2} alt="image" className='pageImage' />
            </div>
            <div className='pageText'>
                <h3 className='pageHeading'>Know what hashtags to use for broadening reach</h3>
                <p className='pagePara'>Track your top hashtags by engagement and the optimal number to use in your next post with Metridash, TikTok hashtag analytics.</p>
                <button className='pageButton'>USE TIKTOK HASHTAG TRACKER</button>
            </div>
        </div>
        <div className='pageFlex'>
            <div className='pageText'>
                <h3 className='pageHeading'>Take a step further with personalized recommendations.</h3>
                <p className='pagePara'>Receive recommendations on increasing views, likes, and comments on posts based on your most engaging posting times.</p>
                <button className='pageButton'>DISCOVER BEST TIME TO POST</button>
            </div>
            <div>
                <img src={image3} alt="image" className='pageImage' />
            </div>
        </div>

    </div>
  )
}

export default Page1