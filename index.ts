import express from 'express'
import cors from 'cors'

const quotes = [
    {
        "id": 1,
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans."
    },
    {
        "id": 2,
        "author": "Walt Disney",
        "quote": "The way to get started is to quit talking and begin doing."
    },
    {
        "id": 3,
        "author": "Mother Teresa",
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        "id": 4,
        "author": "Eleanor Roosevelt",
        "quote": "The future belongs to those who believe in the beauty of their dreams."
    }
]

const app = express()
app.use(cors())
const port = 4000

app.get('/', (req, res) => {
  res.send('Quotes')
})
app.get('/quotes', (req, res) => {
    res.send(quotes)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})