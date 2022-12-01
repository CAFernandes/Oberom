import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";

export const collections: { games?: mongoDB.Collection } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING || 'mongodb://oberom_admim:oberom_pass@mongo:27017/');

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME || 'games');

  collections.games = gamesCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
}
