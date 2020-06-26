import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(
  "mongodb+srv://32-recipes-app:32recipes@32-recipes-1-d2da6.gcp.mongodb.net/32-recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("32-recipes");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
