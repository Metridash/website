import React from 'react';
import "./Page1.css";
//import imshe from "../../public/logo192.png";

function Page1() {
  return (
    <div className='pageContainer'>
        <div className='pageFlex'>
            <div>
                <h3 className='pageHeading'>Identify your top posts in seconds</h3>
                <p className='pagePara'>Understand how your profile performs, how engaging it is, and how often your videos get likes and comments with TikTok user analytics.That’s not all! Unlock posting recommendations to increase engagement too.</p>
                <button>discover your posts</button>
            </div>
            <div>
                <img src="" alt="image" />
            </div>
        </div>
        <div className='pageFlex'>
            <div>
                <img src="../../public/logo192.png" alt="image" />
            </div>
            <div>
                <h3 className='pageHeading'>Know what hashtags to use for broadening reach</h3>
                <p className='pagePara'>Track your top hashtags by engagement and the optimal number to use in your next post with Metridash, TikTok hashtag analytics.</p>
                <button>discover your posts</button>
            </div>
        </div>
        <div className='pageFlex'>
            <div>
                <h3 className='pageHeading'>Take a step further with personalized recommendations.</h3>
                <p className='pagePara'>Receive recommendations on increasing views, likes, and comments on posts based on your most engaging posting times.</p>
                <button>discover your posts</button>
            </div>
            <div>
                <img src="" alt="image" />
            </div>
        </div>

    </div>
  )
}

export default Page1