import express from 'express'
const app = express()
const port = 3000
app.use('/', (req, res) => {
    res.json({ status: true })
})
app.listen(port, () => {
    console.log("App running at port", port);
})
