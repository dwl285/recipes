import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let n = await req.db.collection("recipes").count();
  let r = Math.floor(Math.random() * n);
  let randomDocument = await req.db
    .collection("recipes")
    .find()
    .limit(-1)
    .skip(r)
    .next();
  res.json(randomDocument);
});

export default handler;
