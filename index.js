const express = require('express');
const {routes} = require('./routes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


//Use routes
routes(app);


// --- Only start server if run directly ---
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;
