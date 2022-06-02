const material = [
    {
        id: 0,
        text: 'Brick'
    },
    {
        id: 1,
        text: 'Stucco'
    },
    {
        id: 2,
        text: 'Lap Siding'
    },
    {
        id: 3,
        text: 'Board & Batt Siding'
    }
]

let id = 4

    module.exports = {
        createMaterial: (req, res, next) => {
            let newItem = {
            id: id,
            text: req.body.text
        }
        
        material.push(newItem)
        id++

        res.status(200).send(material)
        },

    getMaterial: (req, res, next) => {
        res.status(200).send(material)
        },

    editMaterial: (req, res, next) => {
        const { id } = req.params
        const { text } = req.body

        const index = material.findIndex(element => +element.id === +id)

        if(index === -1){
            return res.status(404).send('Id not found')
        }

        const newItem = {
            id: material[index].id,
            text: text
        }

        todos.splice(index, 1, newItem)

        res.status(200).send(material)
        },

    deleteMaterial: (req, res, next) => {
        const {id} = req.params

        const index = material.findIndex(element => +element.id === +id)

        if(index === -1){
            return res.status(404).send('Id not found')
        }

        material.splice(index, 1)

        res.status(200).send(material)
    }
}