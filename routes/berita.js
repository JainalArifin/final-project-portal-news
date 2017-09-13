const express = require('express')
const router = express.Router()
const  Model = require('../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images/' })

router.get('/', (req, res)=>{
  Model.Berita.findAll()
  .then((dataBerita) => {
    // res.send(dataBerita)
    res.render('berita', {dtBerita:dataBerita})
  })
  .catch((err) => {
    console.log(err);
  })
})

router.post('/', upload.any(), (req, res)=>{
  Model.Berita.create({
    judulBerita: `${req.body.judulBerita}`,
    isiBerita: `${req.body.isiBerita}`,
    gambar: `${req.files[0].filename}`
  })
  .then(() => {
    res.redirect('/berita')
  })
})

router.get('/delete/:id', (req, res)=>{
  Model.Berita.destroy({
    where: {id: req.params.id }
  })
  .then(() => {
    res.redirect('/berita')
  })
})

router.get('/edit/:id', (req, res)=>{
  Model.Berita.findAll({
    where: {id: req.params.id}
  })
  .then((dataBerita) => {
    res.render('editBerita', {dtBerita:dataBerita[0]})
    // res.send(dataBerita)
  })
})

router.post('/edit/:id', (req, res)=>{
  Model.Berita.update({
    judulBerita: req.body.judulBerita,
    isiBerita: req.body.isiBerita,
    gambar: req.body.gambar
  },{
    where: {id:req.params.id }
  })
  .then(() => {
    res.redirect('/berita')
  })
})


module.exports = router
