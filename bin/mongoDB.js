const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
mongoose.connect('mongodb://'+ process.env.MONGODB_DATABASE + process.env.MONGODB_HOST, { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});

mongoosePaginate.paginate.options={
    limit: 2,
    lean: false
}

mongoose.mongoosePaginate = mongoosePaginate;
module.exports = mongoose; 