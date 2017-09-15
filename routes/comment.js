const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res)=>{
  Model.Comment.findAll()
  .then((dataComment) => {
    // res.send(dataComment)
    res.render('comment', {dtComment:dataComment})
  })
  .catch((err) => {
    res.send(err)
  })
})

router.get('/add', (req, res)=>{
  res.render('addComent')
})

router.post('/', (req, res)=>{
  Model.Comment.create({
    fusername: req.body.fusername,
    email: req.body.email,
    komentar: req.body.komentar
  })
  .then(() => {
    res.redirect('/comment')
  })
})

router.get('/delete/:id', (req, res)=>{
  Model.Comment.destroy({
    where: {id:`${req.params.id}`}
  })
  .then((task) => {
    res.redirect('/comment')
  })
})

router.get('/:id/berita', (req, res)=>{
  Model.Comment.findById(req.params.id)
  .then((dataStudent) => {
    Model.Berita.findAll()
    .then((dataBerita) => {

    })
  })
})

module.exports = router
