const fetch = require('node-fetch');
const csv = require('csv-parser')
const fs = require('fs')

class privateController {

    async parseDev(req, res) {
        const results = [];

        fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => {
            const raw = JSON.stringify({
                "uid": data.uid,
                "name": "morpheus",
                "job": "leader"
            });

            const requestOptions = {
                method: 'POST',
                headers: {
                },
                body: raw,
                redirect: 'follow',
            }

            fetch("https://reqres.in/api/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.error(result)
                })
                .catch(error => {
                    console.log('\x1b[41m%s\x1b[0m', error)
                    return res.json({message: 'error'})
            });
        })
        .on('end', () => {
        });


        return res.json({message: 'dev resended'})
    }

    async parseProd(req, res) {

        fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => {
            const raw = JSON.stringify({
                "uid": data.uid,
                "name": "morpheus",
                "job": "leader"
            });

            const requestOptions = {
                method: 'POST',
                headers: {
                },
                body: raw,
                redirect: 'follow',
            }

            fetch("https://reqres.in/api/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.error(result)
                })
                .catch(error => {
                    console.log('\x1b[41m%s\x1b[0m', error)
                    return res.json({message: 'error'})
            });
        })
        .on('end', () => {
        });




        return res.json({message: 'prod resended'})
    }

    async test(req, res){
        return res.json({message: 'test'})
    }


}

module.exports = new privateController()
