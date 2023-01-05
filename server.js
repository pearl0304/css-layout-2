import express from 'express'

const app = express()
const PORT = 3001

app.set('views', 'views');
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {

  })
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`),
);