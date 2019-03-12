/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	signup: function(req, res){
		sails.log.debug("req.body", req.body);
		let input = req.body;
		User.save(input)
		.then((result)=>{
			res.json({msg: "user created"});

		}) 
		.catch((err)=>{
			res.serverError({msg: "error", err: err});
		})
	}  

};

