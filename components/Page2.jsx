import React from 'react';
import "./Page1.css";
import image4 from "./Images/Screenshot3.png"
import image5 from "./Images/Screenshot4.png"

function Page2() {
  return (
    <div>
        <h1 className='page2Heading'>Become a Trendsetter</h1>
        <div className='pageContainer'>
        <div className='pageFlex'>
            <div className='pageText'>
                <h3 className='pageHeading'>Compare against your competitors</h3>
                <p className='pagePara'>Uncover all your competitors’ secrets. Just create a comparison group to see how you rank against them and win more followers.</p>
                <button className='pageButton'>UNCOVER COMPETITOR INSIGHTS</button>
            </div>
            <div>
                <img src={image4} alt="image" className='pageImage'/>
            </div>
        </div>
        <div className='pageFlex'>
            <div>
                <img src={image5} alt="image" className='pageImage'/>
            </div>
            <div className='pageText'>
                <h3 className='pageHeading'>Analyze which TikTok effects & trends brought you fame</h3>
                <p className='pagePara'>Determine which effects your audience liked, disliked, and how often you should use them on your posts.</p>
                <button className='pageButton'>DISCOVER YOUR BEST VIDEO EFFECTS</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Page2