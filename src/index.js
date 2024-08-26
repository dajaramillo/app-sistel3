const express = require('express')

//configuraciones
const app = express()
app.set('port', process.env.PORT || 3000);


//rutas
app.use(require('./routes/index'));

//Servidor
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port`, app.get('port'))
});