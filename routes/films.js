const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');

/* GET films listing. */

router.get('/', function(req, res) {

    const results =[];

    fs.createReadStream('file.csv')
        .pipe(csv({}))
        .on('data', (data) => results.push(data))
        .on('end', () => {


            if ( +req.query.dest === 0 && req.query.colonsort === 'id' ) {
                results.sort( (a, b) => a.id > b.id ? -1 : 1);
            };
            if ( +req.query.dest === 1 && req.query.colonsort === 'id' ) {
                results.sort( (a, b) => a.id > b.id ? 1 : -1);
            };
            if ( +req.query.dest === 0 && req.query.colonsort === 'name' ) {
                results.sort( (a, b) => a.name > b.name ? -1 : 1);
            };
            if ( +req.query.dest === 1 && req.query.colonsort === 'name' ) {
                results.sort( (a, b) => a.name > b.name ? 1 : -1);
            };
            if ( +req.query.dest === 0 && req.query.colonsort === 'genre1' ) {
                results.sort( (a, b) => a.genre1 > b.genre1 ? -1 : 1);
            };
            if ( +req.query.dest === 1 && req.query.colonsort === 'genre1' ) {
                results.sort( (a, b) => a.genre1 > b.genre1 ? 1 : -1);
            };
            if ( +req.query.dest === 0 && req.query.colonsort === 'genre2' ) {
                results.sort( (a, b) => a.genre2 > b.genre2 ? -1 : 1);
            };
            if ( +req.query.dest === 1 && req.query.colonsort === 'genre2' ) {
                results.sort( (a, b) => a.genre2 > b.genre2 ? 1 : -1);
            };
            if ( +req.query.dest === 0 && req.query.colonsort === 'year' ) {
                results.sort( (a, b) => +a.year > +b.year ? -1 : 1);
            };
            if ( +req.query.dest === 1 && req.query.colonsort === 'year' ) {
                results.sort( (a, b) => +a.year > +b.year ? 1 : -1);
            };

            console.log(results);
            res.send(results);

        });

});

module.exports = router;
