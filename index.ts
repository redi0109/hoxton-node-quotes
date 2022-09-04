import express from "express";
import cors from "cors";
import { quotes } from "./data";


const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

app.get("/", (req, res) => {
  res.send("Quotes");
});
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.get("/random", (req, res) => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomQuote]);
});

app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quote = quotes.find((item) => item.id === id);

  if (quote) {
    res.send(quote);
  } else {
    res.status(404).send({ error: "Item not found!" });
  }
});

app.post("/quotes", (req, res) => {
  let errors: string[] = [];

  if (typeof req.body.author !== "string") {
    errors.push("Author name is not valid, please enter a new one");
  }
  if (typeof req.body.quote !== "string") {
    errors.push("Title is not valid, please enter a new one");
  }
  if (typeof req.body.age !== "number") {
    errors.push("Age is not valid, please enter a new one");
  }
  if (typeof req.body.image !== "string") {
    errors.push("Image is not valid, please enter a new one");
  }

  console.log(req.body);
  if (errors.length === 0) {
    const newQuote = {
      id: quotes[quotes.length - 1].id + 1,
      author: req.body.author,
      quote: req.body.quote,
      age: req.body.age,
      image: req.body.image,
    };
    //@ts-ignore
    quotes.push(newQuote);
    res.send(newQuote);
  } else {
    res.status(400).send({ errors: errors });
  }
});

app.delete("/quotes/:id", (req, res) => {
  const id = Number(req.params.id)
  const indexToDelete = quotes.findIndex(quote => quote.id === id)

  if (indexToDelete > -1) {
    quotes = quotes.filter(quote => quote.id !== id)
    res.send({ message: 'Quote deleted successfully.' })
  } else {
    res.status(404).send({ error: 'Quote not found.' })
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
