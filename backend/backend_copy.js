const http = require('http');
const cors = require("cors");
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://vittal:vittal02@cluster0.79ptozt.mongodb.net/?retryWrites=true&w=majority";
var database;
const server = http.createServer((req, res) => {
    cors()(req, res, () => {
        let route = "";
        if (req.url.substring(0, 8) === '/Region/') {
            if (req.url === "/Region/Rice") {
                route = "Rice";
            } else if (req.url === '/Region/Barley') {
                route = "Barley";
            } else if (req.url === '/Region/Wheat') {
                route = "Wheat";
            } else if (req.url === '/Region/Corn') {
                route = "Corn";
            }
            const projection = { _id: 0 }; //To omit id field in find query
            database.collection(route + "Data").find().project(projection).toArray().then(result => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(JSON.stringify(result));
            })
                .catch(err => {
                    console.error("Error updating document:", err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error updating document");
                })
        } else if (req.url.substring(0, 8) === '/pumpON/') {
            let route = "";
            if (req.url.substring(8) === "Rice") {
                route = "Rice";
            } else if (req.url.substring(8) === "Barley") {
                route = "Barley";
            } else if (req.url.substring(8) === "Wheat") {
                route = "Wheat";
            } else if (req.url.substring(8) === "Corn") {
                route = "Corn";
            }
            database.collection(route + "Data").updateOne({}, { $set: { "Motor Status": "ON" } }).then(result => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });

                res.end(JSON.stringify({ "Motor Status": "ON" }));
            })
                .catch(err => {
                    console.error("Error updating document:", err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error updating document");
                })
        } else if (req.url.substring(0, 9) === '/pumpOFF/') {
            let route = "";
            if (req.url.substring(9) === "Rice") {
                route = "Rice";
            } else if (req.url.substring(9) === "Barley") {
                route = "Barley";
            } else if (req.url.substring(9) === "Wheat") {
                route = "Wheat";
            } else if (req.url.substring(9) === "Corn") {
                route = "Corn";
            }
            database.collection(route + "Data").updateOne({}, { $set: { "Motor Status": "OFF" } }).then(result => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(JSON.stringify({ "Motor Status": "OFF" }));
            })
                .catch(err => {
                    console.error("Error updating document:", err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error updating document");
                })
        }
    })
})



server.listen(3002, () => {
    console.log("Server listening on PORT 3002");
    const client = new MongoClient(url);
    database=client.db("VRISystem")
    async function connect() {
        try {
            await client.connect();
            console.log('Connected to MongoDB Atlas');
        } catch (err) {
            console.error('Error connecting to MongoDB Atlas', err);
        }
    }

    // Call the connect function
    connect();
});