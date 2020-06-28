import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("recipes").find({}).toArray();
  res.json(doc);
});

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  // clean data
  if (data.tags) {
    data.tags.split(",");
  }

  let recipeId = null;
  let match_rules = { _id: new ObjectId() };
  if (data._id != "new") {
    match_rules = {
      _id: new ObjectId(data._id),
    };
    recipeId = data._id;
  }
  delete data._id;

  let doc = await req.db
    .collection("recipes")
    .updateOne(match_rules, { $set: data }, { upsert: true, new: true });

  res.status(200).json({ doc: doc, recipeId: recipeId });
});

export default handler;
