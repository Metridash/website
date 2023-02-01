import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="flex pl-28 pr-28 items-center justify-between mt-10">
      <div className="flex gap-1">
        {/* logo */}
        <h1 className="font-bold text-5xl font-dongle text-darkblue">
          Metri<span className="text-[#3247CF]">Dash</span>
        </h1>
      </div>
      <div className="flex items-center gap-7 font-roboto font-medium text-xl">
        <h3 className="flex items-center gap-1">
          Platform   <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </h3>
        <h3 className="flex items-center gap-1">
          Resources <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </h3>
        <h3>Pricing</h3>
        <h3>Enterprises</h3>
      </div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium text-xl">Log in</h3>
       
      </div>
    </div>
  );
};

export default Navbar;
