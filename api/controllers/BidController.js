/**
 * BidController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function(req, res){
  	Bid.save(req.body, function(err ,bid){
  		if(err){
  			res.severError(err);
  		}else{
  			res.json(bid);
  		}
  	});
  }

};

