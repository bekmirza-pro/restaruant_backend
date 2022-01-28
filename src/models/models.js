const sequelize = require('../../lib/db')
const { DataTypes } = require('sequelize')


const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})


const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})


const BasketFood = sequelize.define('basket_food', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Orders = sequelize.define('orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
    restaruant: { type: DataTypes.STRING },
    food: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING },
    tell: { type: DataTypes.INTEGER },
})

const Food = sequelize.define('food', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
})


const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Restaruant = sequelize.define('restaruant', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
})

const FoodInfo = sequelize.define('food_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

const TypeRestaruant = sequelize.define('type_restaruant', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


User.hasOne(Basket)
Basket.belongsTo(User)


User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketFood)
BasketFood.belongsTo(Basket)

Type.hasMany(Food)
Food.belongsTo(Type)

Restaruant.hasMany(Food)
Food.belongsTo(Restaruant)

Food.hasMany(Rating)
Rating.belongsTo(Food)

Food.hasMany(BasketFood)
BasketFood.belongsTo(Food)

Food.hasMany(FoodInfo, { as: 'info' });
FoodInfo.belongsTo(Food)

Type.belongsToMany(Restaruant, { through: TypeRestaruant })
Restaruant.belongsToMany(Type, { through: TypeRestaruant })


module.exports = {
    User,
    Basket,
    Orders,
    BasketFood,
    Food,
    Type,
    Restaruant,
    Rating,
    TypeRestaruant,
    FoodInfo
}