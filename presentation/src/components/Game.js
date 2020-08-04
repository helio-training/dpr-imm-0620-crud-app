import React from 'react'

// const Game = (props) => {
const Game = ({game, deleteGame, refresh}) => {
    return (
        <li>
            {game.title}
            <button className="del-btn"
                onClick={() => deleteGame(game._id, refresh)}>
                    x
            </button>
        </li>
    )
}

export default Game