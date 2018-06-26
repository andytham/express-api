const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);


// app.get('*', (req, res) => {
// 	res.sendFile(`index.html`, { root: www });
// });

//chat.andytham.com
const historyRoutes = require('./routes/history-route');
const statusesRoutes = require('./routes/statuses-route');
app.use('/api/history', historyRoutes);
app.use('/api/statuses', statusesRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
