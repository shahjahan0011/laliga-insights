import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import countryData from '../../Data/countries.json';
import { ReactCountryFlag } from 'react-country-flag';
import { Link } from 'react-router-dom';

const Country = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => { 
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    })

    const renderCountries = (country) => {
        return (
            <div className='images-container'>
                {
                    country.map((cout, idx) => {
                    return(
                        <div className='image-box' key={idx}>
                            <ReactCountryFlag className='flag' countryCode={cout.code} svg 
                            style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
                            <div className='content'>
                                <p className='title'>{cout.name}</p>
                                <h4 className='count'>Number of players: {cout.count}</h4>
                                <Link to={`/data?country=${encodeURIComponent(cout.search)}`}>
                                <button className='btn'>
                                View </button></Link>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }

    return (
        <>
        <div className="container country-page">
             <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Countries".split("")}
                    idx={15} />
             </h1>
             {/* <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a country"
                    />
                </div> */}
             <div>
                {renderCountries(countryData.country)}
             </div>
        </div>
        </>
    )
}

export default Country;