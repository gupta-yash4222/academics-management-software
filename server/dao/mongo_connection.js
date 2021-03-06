const { MongoClient } = require('mongodb');
require('dotenv').config();

var client;
async function main() {
    const uri = process.env.ACADEMICS_DB_URI;
    client = new MongoClient(uri);
    try {
        await client.connect();
    }
    catch (e) {
        console.error(e);
    }
    finally{
        await client.close();
    }
}

main().catch(console.error);