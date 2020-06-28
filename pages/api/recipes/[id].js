import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import { ObjectId } from "mongodb";

const recipeHandler = nextConnect();

recipeHandler.use(middleware);

recipeHandler.get(async (req, res) => {
  const recipeId = req.query.id;

  let doc = {};

  if (recipeId) {
    doc = await req.db.collection("recipes").findOne({
      _id: new ObjectId(recipeId),
    });
  } else {
    doc = await req.db.collection("recipes").findOne();
  }
  res.json(doc);
});

export default recipeHandler;
