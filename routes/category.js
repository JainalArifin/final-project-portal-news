const express = require('express');
const router = express.Router();
const Model = require('../models');

// READ DATA TABLE FROM CATEGORIES
router.get('/', function(req,res) {
  Model.Category.findAll({
    include:[Model.Berita]
  })
  .then(dataCategory => {
    console.log(dataCategory, '<--------');
    res.render('category', {dtCategory: dataCategory})
    //res.send(dataCategory)
  })
})

// READ DATA TABLE FOR FROM CATEGORIES
router.get('/addCategory', function(req,res) {
  Model.Category.findAll()
  .then(dataCategory => {
    res.render('addCategory')
  })
})

// CREATE DATA TABLE CATEGORIES
router.post('/addCategory', function(req,res) {
  Model.Category.build({
    nameCategory: req.body.nameCategory,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(dataCategory => {
    res.redirect('/category')
  })
})

// DELETE DATA TABLE CATEGORIES
router.get('/delete/:id', function(req,res) {
  Model.Category.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.redirect('/category')
  })
})

// EDIT DATA TABLE CATEGORIES
router.get('/edit/:id', function(req,res) {
  Model.Category.findAll({
    where : {
      id : req.params.id
    }
  })
  .then(dataCategory => {
    res.render('editCategory', {dtCategory: dataCategory[0]})
  })
})

router.post('/edit/:id', function(req,res) {
  Model.Category.update(
    {
      nameCategory: req.body.nameCategory
    },
    {
      where: { id: req.params.id}
    }
  )
  .then(subjects =>
    res.redirect('/category')
  )
})


module.exports = router
