import Database from "better-sqlite3";

const db = Database("./db/data.db", { verbose: console.log });

const quotes = [
  {
    id: 1,
    quote: "Life is what happens when you're busy making other plans.",
    authorId: 1,
  },
  {
    id: 2,
    quote: "The way to get started is to quit talking and begin doing.",
    authorId: 2,
  },
  {
    id: 3,
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    authorId: 3,
  },
  {
    id: 4,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    authorId: 4,
  },
];

const createQuotesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS quotes(
    id INTEGER NOT NULL,
    quote TEXT NOT NULL,
    authorId INTEGER NOT NULL,
    PRIMARY KEY (id)
  );
  `);

createQuotesTable.run();

const deleteAllQuotes = db.prepare(`
  DELETE FROM quotes
  `);

deleteAllQuotes.run();

const CreateQuote = db.prepare(`
  INSERT INTO quotes (quote, authorId) VALUES (?, ?);
  `);

for (let quote of quotes) {
  CreateQuote.run(quote.quote, quote.authorId);
}

const authors = [
  {
    id: 1,
    name: "John Lennon",
    age: 40,
    image:
      "https://imgs.search.brave.com/gZtzxR-sGjRlkJd30fqQG3JPTz4NRjXwPUu_EbS8CqY/rs:fit:1008:700:1/g:ce/aHR0cHM6Ly90b2Rh/eWJpcnRoZGF5Lmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA2L0pvaG4tTGVu/bm9uLTdpbmZpLmpw/Zw",
  },
  {
    id: 2,
    name: "Walt Disney",
    age: 65,
    image:
      "https://imgs.search.brave.com/KdCrxLgB6M1tX6wzVpxYfoI1hCRZnGv5OEFgEcsJVbo/rs:fit:1200:1178:1/g:ce/aHR0cHM6Ly93d3cu/dGhlYmFsYW5jZXNt/Yi5jb20vdGhtYi9C/MXFLY2RBVVhqbTk1/MmwzYlFKMldVYVpr/NGs9LzE1MDB4MTE3/OC9maWx0ZXJzOmZp/bGwoYXV0bywxKS9H/ZXR0eUltYWdlcy02/MTM0OTA5NjgtNWMx/ZmU4YTA0NmUwZmIw/MDAxZTFkNmM2Lmpw/Zw",
  },
  {
    id: 3,
    name: "Mother Teresa",
    age: 87,
    image:
      "https://imgs.search.brave.com/VTyWtZGYeTuw18rDf_qgIhcyHg3f5OsyCJMA07fth0g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lmhh/cnZiaXNob3AuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA5L01vdGhlci1U/ZXJlc2EtQmFjYS1s/YXJnZXItc2l6ZS5q/cGc",
  },
  {
    id: 4,
    name: "Eleanor Roosevelt",
    age: 78,
    image:
      "https://imgs.search.brave.com/BHOaX1gaVlEWnev7GNBGdoGL2qC5quGoWhNRc9coAQw/rs:fit:1200:1200:1/g:ce/aHR0cDovL2J0aW1l/c2hlcmFsZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDUvUm9vc2V2ZWx0/LTEuanBn",
  },
];

const createAuthorsTable = db.prepare (`
 CREATE TABLE IF NOT EXISTS authors (
  id INTEGER NOT NULL,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  image TEXT NOT NULL,
  PRIMARY KEY (id)
 );
`);

createAuthorsTable.run();

const deleteAllAuthors = db.prepare(`
DELETE FROM authors
`);

deleteAllAuthors.run();

const createAuthor = db.prepare(`
INSERT INTO authors (name, age, image) VALUES (?, ?, ?)
`);

for (let author of authors) {
  createAuthor.run(
    author.name,
    author.age,
    author.image
  )
};

