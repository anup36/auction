/**
 * AuctionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function(req, res){
  	sails.log.debug("req.body auction", req.body);

	Auction.save(req.body)
	.then((aution)=>{
		res.json({statusCode: 200, msg: "Auction Added!"});
	})
	.catch((err)=>{
		res.serverError(err);

	})
  },

  listItems: function(req, res){
  	listItems()
  	.then((lists)=>{
  		return  res.json(autionItems);
  	})
  	.catch((err)=>{
  		return res.serverError(err);
  	})

  },

  upcoming: function(req, res){
  	upcoming()
  	.then((autionItems)=>{
  		return res.json(autionItems);
  	})
  	.catch((err)=>{
  		return res.serverError(err);
  	})
  },

  previous: function(req, res){
  	Auction.find({"start_time": { '<' : new Date() } }   , function(err, autionItems){
  		if(err){
  			res.serverError(err);
  		}else{
  			// sails.log.debug("resl", result);
  			return res.json(autionItems);

  		}
  	})
  }


};

function listItems(){
	return new Promise((reject, resolve)=>{
	  	Auction.find({select:["item"]}, function(err, autionItems){
	  		if(err){
	  			// res.serverError(err);
	  			reject(err);
	  		}else{
	  			// sails.log.debug("resl", result);
	  			// return res.json(autionItems);
	  			resolve(autionItems);
	  		}
	  	});	
	});
};

function upcoming(){
	reutrn new Promise((reject, resolve)=>{
	  	Auction.find({"start_time": { '>' : new Date() } }   , function(err, autionItems){
	  		if(err){
	  			// res.serverError(err);
	  			reject(err);
	  		}else{
	  			// sails.log.debug("resl", result);
	  			// return res.json(autionItems);
	  			resolve(autionItems);
	  		}
	  	});		
	});
}