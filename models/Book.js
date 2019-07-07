// module.exports = (Schema, model) => model('Book', new Schema({
//     title: String,
//     authors: String,
//     description: String,
//     image: String,
//     link: String
//   }))

module.exports = (Schema, model) => {
    const Book = new Schema({
        title: {
            type: String
        },
        authors: {
            type: Array
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        link: {
            type: String
        },
    })

    return model('Book', Book)
}