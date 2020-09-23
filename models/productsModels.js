const mongoose = require("../bin/mongoDB");
const tagsSchema = new mongoose.Schema({
    name:{
        type:String
    }
});

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        index: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
        required: true
    }, 
    sku: {
        type: String,
        unique: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ["pendiente","en_stock","activo"]
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    price: {
        type: Number,
        required: true,
        get: (price_get) => {
            return price_get * 1.21
        }
    },
    quantity: Number,
    tags:[tagsSchema]
});

productsSchema.set('toJSON', {getters: true });

module.exports = mongoose.model("products",productsSchema);



/*
module.exports = {
    getAll: async function() {
        db.pool.execute("select * from productos");
        .then(data=>console.log(data));

        const result = await db.pool.execute("select * from products");
        console.log(result);
        return result;
    },
    create: (data) => {
        db.pool.query(
            "INSERT INTO products SET denominacion=?, descripcion=?,activa=?, codigo=?, precio=?, precio_oferta=?, categoria_id=?",
            [data.denominacion,data.descripcion,data.activa,data.codigo,data.precio,data.precio_oferta,data.categoria_id]
        );
    }
}
*/