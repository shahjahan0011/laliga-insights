import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const ITEMS_PER_PAGE = 10;

const Api = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [playerData, setPlayerData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [letterClass] = useState('text-animate');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = ['team', 'country', 'position', 'name']
      .map(key => ({ key, value: params.get(key) }))
      .find(item => item.value);

    if (query) {
      axios.get(`http://localhost:8080/api/player?${query.key}=${encodeURIComponent(query.value)}`)
        .then(response => setPlayerData(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

    const paginatedPlayers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return playerData.slice(startIndex, endIndex);
    }, [playerData, currentPage]);

    const totalPages = Math.ceil(playerData.length / ITEMS_PER_PAGE);

    if (loading) {
        return (
        <div className="spinner-container">
            <div className="spinner" />
        </div>
        );
    }

    if (error) {
        return <p className="error-message">Error: {error.message}</p>;
    }

    if (playerData.length === 0) {
        return <p className="no-data-message">No players found.</p>;
    }

    return (
        <div className="fade-in">
        <div className="table-container">
            <h1 className="page-title">
            <AnimatedLetters letterClass={letterClass} strArray={"Player Data".split("")} idx={12} />
            </h1>

            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Position</th>
                <th>Age</th>
                <th>Matches Played</th>
                <th>Starts</th>
                <th>Minutes Played</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Penalties</th>
                <th>Yellow Cards</th>
                <th>Red Cards</th>
                <th>Expected Goals (xG)</th>
                <th>Expected Assists (xAG)</th>
                <th>Team</th>
                </tr>
            </thead>
            <tbody>
                {paginatedPlayers.map(player => (
                <tr key={player.name}>
                    <td>{player.name}</td>
                    <td>{player.country}</td>
                    <td>{player.position}</td>
                    <td>{player.age}</td>
                    <td>{player.matches_played}</td>
                    <td>{player.starts}</td>
                    <td>{player.minutes_played}</td>
                    <td>{player.goals}</td>
                    <td>{player.assists}</td>
                    <td>{player.penalty}</td>
                    <td>{player.yellow_cards}</td>
                    <td>{player.red_cards}</td>
                    <td>{player.expected_goals}</td>
                    <td>{player.expected_assists}</td>
                    <td>{player.team_name}</td>
                </tr>
                ))}
            </tbody>
            </table>

            <div className="pagination">
            <button 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(prev => prev - 1)}
            >
                Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(prev => prev + 1)}
            >
                Next
            </button>
            </div>
        </div>
        </div>
    )
}

export default Api;
