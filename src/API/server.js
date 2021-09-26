const app= require('./app');
const port = 3000;


    app.listen(port, () => {
      console.log(`Service listening at http://localhost:${port}`)
    })

// nueva clase server y que este en un inicialize. Todo lo hago dentro de la clase.
// inicialize se llama desde el index.