import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useState } from "react";

const Search = () => {

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
                    <AnimatedLetters letterClass={letterClass} strArray={"Search".split("")} idx={15}/>
                </h1>
                <div className="search-bar2">
                    <input
                        type="text"
                        placeholder="Search for players"
                        // value={searchQuery}
                        // onChange={handleSearchChange}
                    />
                    <button >Go</button>
                </div>
            </div>
        </>
    )
}

export default Search;