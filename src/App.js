import "./App.css";
import Analytics from "./components/analytics/Analytics";
import Footer from "./components/footer/Footer";
import InstantAnalytics from "./components/instant-analytics/InstantAnalytics";
import Navbar from "./components/navbar/Navbar";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Overview></Overview>
      <Analytics></Analytics>
      <div className="bg-[#fff] text-4xl font-bold text-center mt-12 mb-12">
        <h2>Tweet It Like You Mean It</h2>
      </div>
      <InstantAnalytics></InstantAnalytics>
      <Footer></Footer>
    </div>
  );
}

export default App;
