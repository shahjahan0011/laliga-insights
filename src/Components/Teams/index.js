import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Teams = () => {

        const [letterClass, setLetterClass] = useState('text-animate');
        
            useEffect(() => { 
                const timer = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
                return () => clearTimeout(timer);
            })

        return (
        <>
        <div className="container team-page">
             <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Teams".split("")}
                    idx={15} />
             </h1>
             <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a team"
                    />
                </div>
             <div>
                {/* {renderTeams(teamData.team)} */}
             </div>
        </div>
        </>
    )
}

export default Teams;