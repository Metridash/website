import Hashimage from "../../assets/Screenshot 2023-01-31 at 11.48.21 PM.png";
import twittercustom from "../../assets/Screenshot 2023-01-31 at 11.48.29 PM.png";
import exportData from "../../assets/Screenshot 2023-01-31 at 11.48.35 PM.png";
import historical from "../../assets/Screenshot 2023-01-31 at 11.48.42 PM.png";
import profile from "../../assets/Screenshot 2023-01-31 at 11.48.47 PM.png";

const Analytics = () => {
  return (
    <div className="  font-roboto  bg-[#3247CF]">
      <div className=" mt-10  pl-28 pr-28 flex flex-col  justify-between lg:flex-row-reverse">
        <img className="w-1/2 mt-14" src={Hashimage} alt="" />
        <div>
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Twitter Hashtags Analytics to Capture Growth Metrics
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            We use Twitter’s official firehose API, to give you real-time data
            and accurate metrics. <br />
            Track any hashtag or keyword across Twitter to unveil exactly how
            many <br /> people mentioned it, who they are, and what they said.
            Plus, get aggregated engagement <br /> metrics like reach and
            impressions instantly, skipping hours of manual work.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            TWITTER HASHTAG TRACKER
          </button>
        </div>
      </div>
      <div className=" mt-10  pl-28 pr-28 flex  justify-between lg:flex-row-reverse">
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Twitter Custom Reports
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Make your clients happy with custom Twitter Analytics reports.Select
            the metrics your client really care about and display them in a
            ready-to-print and easy-to-read report.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            DOWNLOAD CUSTOM REPORT
          </button>
        </div>
        <img className=" h-[378px] mt-14 w-2/5" src={twittercustom} alt="" />
      </div>
      <div className=" mt-10  pl-28 pr-28 flex  justify-between lg:flex-row-reverse">
        <img className="  mt-14 w-2/5" src={exportData} alt="" />
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Data Exports (PDF, XLS, CSV)
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Export raw data in XLS or CSV to analyze all posts, influencers and
            metrics in a customized way.Or download presentation-ready PDFs to
            share with your clients and teams.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            EXPORT DATA
          </button>
        </div>
      </div>
      <div className=" mt-10  pl-28 pr-28 flex content-center justify-between lg:flex-row-reverse">
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Twitter Historical Data
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Go back in time with historical data from past campaigns for a
            personalized Twitter trend analysis.Get all mentions and metrics for
            your hashtags or brands from up to 5 years ago.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
            REQUEST REPORT
          </button>
        </div>
        <img className="  mt-14 w-2/5" src={historical} alt="" />
      </div>
      <div className=" pb-16 mt-10  pl-28 pr-28 flex content-center justify-between lg:flex-row-reverse">
        <img className="  mt-14 w-2/5 h-[380px]" src={profile} alt="" />
        <div className="w-2/5">
          <h2 className="text-4xl font-bold text-[#fff] mt-[100px]">
            Track Twitter Profiles and Accounts{" "}
          </h2>
          <p className="italic text-[#C4C4C4] font-simple text-xl pt-9">
            Twitter Tracking for any public Twitter profile, even without login
            access.Use it to understand how competitors and influencer accounts
            are performing, and how they compare to your own.
          </p>
          <button className="bg-[#000000] text-[#fff] p-6 rounded-lg mt-9 font-semibold">
          TRACK YOUR TWITTER ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
