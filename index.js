const server = require ("./api/server")//import new server file


const PORT = process.env.PORT || 3300;


server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});


module.exports = server //<<<<<<<<
