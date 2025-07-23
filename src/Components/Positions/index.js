import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import positionData from '../../Data/positions.json';
import { Link } from 'react-router-dom';

const Positions = () => {

        const [letterClass, setLetterClass] = useState('text-animate');
        
            useEffect(() => { 
                const timer = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
                return () => clearTimeout(timer);
            })

        const renderPositions = (position) => {
        return (
            <div className='images-container'>
                {
                    position.map((posi, idx) => {
                    return(
                        <div className='image-box' key={idx}>
                            <img className='posi-image' src={posi.cover} alt={posi.title}/>
                            <div className='content'>
                                <p className='title'>{posi.title}</p>
                                <Link to={`/data?position=${encodeURIComponent(posi.search)}`}>
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
        <div className="container position-page">
             <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Positions".split("")}
                    idx={15} />
             </h1>
             {/* <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a team"
                    />
                </div> */}
             <div>
                {renderPositions(positionData.position)}
             </div>
        </div>
        </>
    )
}

export default Positions;