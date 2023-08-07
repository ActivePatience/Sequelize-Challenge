const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: {model: Product,}
    });
    res.json(categories);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {model: Product,}
    });
    res.json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const response = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(response);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
