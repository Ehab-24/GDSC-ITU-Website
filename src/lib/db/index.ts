import { MONGODB_URI } from "$env/static/private";
import { MongoClient } from "mongodb";

const client = new MongoClient(MONGODB_URI);
await client.connect();
export default client.db("gdsc");
