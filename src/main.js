import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

app.listen(port, () => console.log(`Listening at port ${port}`))
