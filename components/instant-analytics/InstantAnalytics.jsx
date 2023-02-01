import instanttrand from "../../assets/Screenshot 2023-01-31 at 11.48.54 PM.png";
import compeare from "../../assets/Screenshot 2023-01-31 at 11.48.58 PM.png";
import engagement from "../../assets/Screenshot 2023-01-31 at 11.49.04 PM.png";
import audiencefeel from "../../assets/Screenshot 2023-01-31 at 11.49.11 PM.png"
const InstantAnalytics = () => {
  return (
    <div className=" font-roboto  bg-[#3247CF]">
      <div className="    pl-28 pr-28 flex  justify-between lg:flex-row-reverse">
        <img className=" w-2/5 h-2/3 mt-16" src={instanttrand} alt="" />
        <div className="w-2/5 items-start">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Instant Twitter Trend Analysis
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            With our nifty feature called Quick Trends, type in any keyword or
            hashtag and instantly see how many people mentioned it on Twitter in
            the past. Our customers love <br /> it for tracking trends, bench
            marking and what is probably the world’s fastest form of competitive
            analysis.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            DISCOVER TREND
          </button>
        </div>
      </div>
      <div className=" mt-10   pl-28 pr-28 flex  items-center justify-between lg:flex-row-reverse">
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Out-Tweet the Competition
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Since you can access data on any public Twitter account, competitive
            analysis just got way easier. Use Metridash’s Twitter Analytics to
            easily understand how competitors are performing, not only by
            follower count but more importantly, by engagement.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            TRACK YOUR COMPETITORS
          </button>
        </div>
        <img className=" w-2/5 h-2/3 mt-14" src={compeare} alt="" />
      </div>
      <div className=" mt-10   pl-28 pr-28 flex  items-center justify-between lg:flex-row-reverse">
        <img className=" w-2/5 h-2/3 mt-14" src={engagement} alt="" />
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Grow Your Engagement on Twitter
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Unlock Twitter Profile recommendations like best times to post,
            optimal number of hashtags and more, to start growing engagements on
            your accounts.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
          GROW YOUR TWITTER ACCOUNT
          </button>
        </div>
      </div>
      <div className=" mt-10  pb-32 pl-28 pr-28 flex  items-center justify-between lg:flex-row-reverse">
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Grow Your Engagement on Twitter
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Unlock Twitter Profile recommendations like best times to post,
            optimal number of hashtags and more, to start growing engagements on
            your accounts.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
          GROW YOUR TWITTER ACCOUNT
          </button>
        </div>
        <img className=" w-2/5 h-2/3 mt-14" src={audiencefeel} alt="" />
      </div>
    </div>
  );
};

export default InstantAnalytics;
