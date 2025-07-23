import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Search = () => {

    const [input, setInput] = useState('');
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000); 

        return () => { 
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <div className="container search-page">
                <h1 className="page-title">
                    <br/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={"Search & Compare".split("")} idx={15}/>
                </h1>
                <div className="search-bar2">
                    <input
                        type="text"
                        placeholder="Search for Multiple Players   Eg:(raphinha,lamine,mbappe)"
                        value={input}
                        onChange={(val) => setInput(val.target.value)}
                    />
                    <Link to={`/data?name=${encodeURIComponent(input)}`}>
                    <button >Go</button></Link>
                </div>
            </div>
        </>
    )
}

export default Search;