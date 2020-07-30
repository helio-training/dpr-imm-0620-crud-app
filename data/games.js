const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.DB_URL;
const db_name = 'media';
const col_name = 'games';
const options = {
    useUnifiedTopology: true
}

const readGames = () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            })
        });
    });
    return iou;
}

const createProduct = (product) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(product, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops[0]);
                client.close();
            });
        });
    });
    return iou; // I Owe You
}

module.exports = {
    readGames,
    createProduct
}