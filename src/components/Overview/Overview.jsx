import twitter from "../../assets/Screenshot 2023-01-31 at 11.48.13 PM.png";
import CheckIcon from '@mui/icons-material/Check';


const Overview = () => {
    return (
        <div className=" font-archivo   bg-[#fff]">
  <div className="h-[600px]  pl-28 pr-28 flex items-center flex-col  justify-between lg:flex-row-reverse">
    <img  className="w-1/3 " src={twitter} alt="" />
    <div>
      <h1 className="text-2xl font-bold">TWITTER ANALYTICS </h1> <br />
      <p className="text-4xl font-bold ">Twitter Analytics & <br /> Custom Reporting</p>
      <p className="text-xl py-6">Track any Hashtag or Account on Twitter with real-time data, and <br /> create presentation-ready reports for clients in seconds.</p>
      <button className="btn btn-primary bg-[#3247CF]">START FREE TRIAL</button>
      <div className="flex items-center mt-4">
        <CheckIcon/>
        <p className="ml-4 text-xs">No credit card required</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Overview;