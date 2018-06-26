const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

// app.get('*', (req, res) => {
// 	res.sendFile(`index.html`, { root: www });
// });

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PATCH, POST")
  next();
});

// chat.andytham.com
const historyRoutes = require('./routes/history-route');
const statusesRoutes = require('./routes/statuses-route');
app.use('/api/history', historyRoutes);
app.use('/api/statuses', statusesRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
