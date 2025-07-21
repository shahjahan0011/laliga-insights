import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from "react";
import Logo from './Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Welcome to".split("");
    const jobArray = "LaLiga Insights!".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2> Love Football? You belong here! <br/>
                     Find all the statistics in one place.
                </h2>
                <Link className="flat-button" to="/Teams">Get Started</Link>
            </div>
            <Logo />
        </div>
        </>
    )
}

export default Home;