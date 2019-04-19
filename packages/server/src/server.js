const express = require('express');
const app = express();
// const PORT = 3001;

app.get("/", (req, res) => res.send("Hello World ngoc!"));

// app.listen(PORT, () => console.log(`🚀 Server is running on ${PORT}.`))


module.exports = app;


/**
  console.log('🚀 started on 3000.');
  console.log('✅  Server-side HMR Enabled!');
  console.log('🔁  HMR Reloading `./server`...');
 */

// "start:server": "rm -rf ./build && webpack --config  webpack.config.server.js",