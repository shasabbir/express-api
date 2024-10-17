const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Learn Done')
})
app.get('/api', (req, res) => {
    console.log(`Request from ${req.hostname} to ${req.path} with ${req.method} method`)
    res.json([
        { id: 1, name: 'John Doe' }

    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})