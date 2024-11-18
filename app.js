import express from 'express'
import process from 'process'

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/version', (req, res) => {
  res.send(1)
})
app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
