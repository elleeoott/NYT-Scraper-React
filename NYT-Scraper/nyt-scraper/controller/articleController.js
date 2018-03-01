//Method here will define article controller

//Find all the articles
module.exports = {
    findAll: function(req, res) {
      db.Articles
        .find(req.query)
        .then(dbModel => {
          res.json(dbModel)
        }
        )
        .catch(err => res.status(400).json(err));
    },

//Res all the articles
    create: function(req, res) {
      
      db.Articles
        .create(req.body.passNewArticle)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

//Delete articles

    delete: function(req,res){

      db.Articles
        .deleteOne({_id: req.params.Id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    }
    
  };