import React from 'react';
import Game from './Game';
import CreateGame from './CreateGame';

class Games extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            games: []
        }
        this.getGames = this.getGames.bind(this);
    }
    // Track this.state
    
    // componentDidMount() calls a function to fetch()
    getGames () {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/games`)
            .then(response => response.json())
            .then(data => this.setState({games:data}))
    }
    componentDidMount(){
        this.getGames();
    }
    deleteGame(id, refresh) {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/games/${id}`,{
            method: "DELETE"
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                refresh();
            })
    }
    // render() list of Games
    render() {
        const displayGames = this.state.games.map(game => 
            // Game(game, deleteGame, refresh)
            <Game 
                key={game._id} 
                game={game}
                deleteGame={this.deleteGame}
                refresh={this.getGames}/>
        );
        return (
            <>
                <CreateGame refresh={this.getGames}/>
                <ul>
                    {displayGames}
                </ul>
            </>
        )
    }

}

export default Games;