const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const hbs = exphbs.engine()

app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

app.engine('handlebars', hbs)
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
})
