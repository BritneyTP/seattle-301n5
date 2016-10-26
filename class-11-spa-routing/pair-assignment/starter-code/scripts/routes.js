'use strict';
// TODID: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it: page('/', index)
page('/',articlesController.index() )
// page('/about', )
page('/about',aboutController.index() )
// page('/admin', )
// page('/admin')

// page('/*', homeController.error)
// TODID: What function do you call to activate page.js? Fire it off now, to execute!
page();
