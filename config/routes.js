/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'post /api/v1/user/signup': 'UserController.signup',


  'post /api/v1/auction/add': 'AuctionController.create',

  /*List all actions Item*/
  'get /api/v1/auction/items': 'AuctionController.listItems',
  /*Upcoming Auction */
  'get /api/v1/auction/upcoming': 'AuctionController.upcoming',
  
  /*Previous Auction */
  'get /api/v1/auction/previous': 'AuctionController.previous',



};
