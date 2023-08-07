// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags',
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags',
});

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
