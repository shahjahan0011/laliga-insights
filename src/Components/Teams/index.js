import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import teamData from '../../Data/teams.json';

const Teams = () => {

        const [letterClass, setLetterClass] = useState('text-animate');
        
            useEffect(() => { 
                const timer = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
                return () => clearTimeout(timer);
            })

        const renderTeams = (team) => {
        return (
            <div className='images-container'>
                {
                    team.map((team, idx) => {
                    return(
                        <div className='image-box' key={idx}>
                            <img className='team-image' src={team.cover} alt={team.name}/>
                            <div className='content'>
                                <p className='title'>{team.title}</p>
                                <button className='btn'>View</button>
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
                {renderTeams(teamData.team)}
             </div>
        </div>
        </>
    )
}

export default Teams;