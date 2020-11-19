const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://new-user:O17H4ivOno2Y1zSM@softlyspoken.pcgbr.mongodb.net/Softlyspoken?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})