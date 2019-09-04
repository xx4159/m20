const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use('*', (req, res, next) => {
  res.sendFile('/dist/index.html', { root: __dirname });
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
