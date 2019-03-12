/**
 * Auction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    item: {type: 'json'},
    // item_name: {type: 'string'},
    // item_desc: {type: 'string'},
    start_time: {type: 'string', columnType: 'datetime'},
    end_time: {type:'string', columnType: 'datetime'},
    startingAmount: {type: 'number'},
    imageURL: {type: 'string'},
    winner: {type: 'string'},
    aucitoned: {type: 'boolean', defaultsTo: false},
    highest_bid: {model: 'bid'},
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },
  save: function(data, cb){
    sails.log.debug("auction model");

    return new Promise((reject, resolve)=>{
        Auction.create(data).exec(function(err, auction){
            if(err){
                reject(err);
            }else{
                sails.log.debug("auction adde");
                // cb(null, auction);
                resolve(auction);
            }
        })        
    });
  }
  
};

