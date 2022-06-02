const express = require('express')
const app = express()
const SERVER_PORT = 4005
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/Inputs', ctrl.getMaterial)
app.post('/api/Inputs', ctrl.createMaterial)
app.put('/api/Inputs/:id', ctrl.editMaterial)
app.delete('/api/Inputs/:id', ctrl.deleteMaterial)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))