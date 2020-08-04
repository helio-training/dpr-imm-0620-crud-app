const express = require('express');
const router = express.Router();
const {
    createGame,
    readGames, 
    upsertGame,
    deleteGame
} = require('../../data/games');

/* GET users listing. */
router.get('/', async function (req, res) {
    const data = await readGames();
    console.log(data);
    res.send(data);
});

router.post('/', async function(req, res) {
    // Extract Request Body Data
    const body = req.body;
    // Use the DAL to Create using that Data
    const data = await createGame(body);
    // Send the results 
    res.send(data);
    // res.send(await createGame(req.body));
});

router.put('/:id', async function(req, res){
    const body = req.body;
    const id = req.params.id;
    const data = await upsertGame(id, body);
    res.send(data);
})

router.delete('/:id', async function (req, res) {
    const data = await deleteGame(req.params.id);
    console.log(data);
    res.send(data);
});

module.exports = router;