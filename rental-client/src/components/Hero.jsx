import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Tools Rental Platform in this year</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        Discover the ultimate tool rental experience with IM Tools Rental. As the premier destination for renting tools, IM Tools Rental offers a vast selection of high-quality equipment for all your project needs. 
        </p>
        <Link to="/rental" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Rental Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero