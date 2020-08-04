import React, { useState } from 'react'
import UpsertGame from './UpsertGame'

// const Game = (props) => {
const Game = ({game, deleteGame, refresh}) => {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    return (
        <li>
            {game.title}
            <i onClick={() => toggleForm()}
                class="fa fa-gear"></i>
            
            <i onClick={() => deleteGame(game._id, refresh)} 
                className="fa fa-trash-o del-btn"></i>
            
            {update ? 
                <UpsertGame game={game}
                    toggleForm={toggleForm}
                    refresh={refresh}/> 
                : ''}
        </li>
    )
}

export default Game