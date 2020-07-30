import React from 'react';
import Game from './Game';

class Games extends React.Component {
    // Track this.state
    state = {
        games: [ ]
    }
    // componentDidMount() calls a function to fetch()
    getGames = () => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/games`)
            .then(response => response.json())
            .then(data => this.setState({games:data}))
    }
    componentDidMount(){
        this.getGames();
    }
    // render() list of Games
    render() {
        const displayGames = this.state.games.map(game => <Game key={game._id} game={game}/>);
        return (
            <ul>
                {displayGames}
            </ul>
        )
    }

}

export default Games;