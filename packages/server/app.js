const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, '../' ,'film/build')));

app.get("/hello", (req, res) => res.send("Hello World !"));

// Handles any requests that don't match the ones above
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname, '../' ,'film/build/index.html'));
});


app.listen(PORT, () => console.log(`🚀 Server is running on ${PORT}.`))


module.exports = app;

/**
  console.log('🚀 started on 3000.');
  console.log('✅  Server-side HMR Enabled!');
  console.log('🔁  HMR Reloading `./server`...');
 */
