var express = require('express');
var router = express.Router();
var Model = require('../models')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('editors', { title: 'Express' });
// });

router.get('/', (req, res)=>{
  Model.Berita.findAll({
    limit: 3,
    order:[['id', 'DESC']],
    include: [Model.Category]
  })
  .then((dataBerita) => {
    // res.send(dataBerita)
    Model.Category.findAll({
      include: [Model.Berita]
    })
    .then((dataCategory) => {
      // console.log(dataCategory[0].id, '<------ test');
      res.render('interface', {dtBerita:dataBerita, dtCategory:dataCategory})
    })
  })
})

router.get('/interface/:id', function(req,res) {
  Model.Category.findAll({
    include:[Model.Berita],
    where : {id: req.params.id}
  })
  .then((dataCategory) => {
    Model.Category.findAll()
    .then((category) => {
      Model.Berita.findAll({
        order: [['id','DESC']],
        limit: 3,
      })
      .then((dataBerita) =>{
        res.render('listCategory', {dtCategory: dataCategory, category: category, dtBerita: dataBerita})
      })
    })
    // res.send(dataCategory)
    // console.log(dataCategory[0].Berita, '<------');
    // res.send(dataCategory[0].Berita)
  })
})

router.get('/blog/detail/:id', (req, res)=>{
  // res.render('newsPage')
  Model.Berita.findAll({
    where:{id:req.params.id}
  })
  .then((dataBerita) => {
    Model.Category.findAll()
    .then((category) => {
      Model.Berita.findAll({
        order: [['id', 'DESC']],
        limit: 3,
      })
      .then(berita => {
        res.render('newsPage', {dtBerita:dataBerita, category: category, berita: berita})
      })
    })
    // res.send(dataBerita)
  })
})

router.get('/blog', (req,res) => {
  console.log("===HAHAHHAHA", req.query);
  if(!req.query.hasOwnProperty('search')) {
    Model.Berita.findAll({
      order: [['id', 'ASC']]
    })
    .then(dataBerita => {
      Model.Category.findAll()
      .then((category) => {
        Model.Berita.findAll({
          limit: 3,
          order: [['id', 'DESC']]
        })
        .then((berita)=> {
          res.render('newsSearch', {dtBerita: dataBerita, category: category,berita: berita})
        })
      })
    })
  } else {
    Model.Berita.findAll({
      where:{ $or: [
        {
          judulBerita: {
            $like: `%${req.query.search}%`
          }
        },
        {
          isiBerita: {
            $like: `%${req.query.search}%`
          }
        }
      ]
    }
    })
    .then((data) => {
      Model.Category.findAll()
      .then((dataCategory) => {
      Model.Berita.findAll()
      .then(dataBerita => {
        res.render('searchResult', {dtSearch:data, category: dataCategory,berita: dataBerita})
      })
      })
      // res.send(data)
    })
  }
})




module.exports = router;
