const express = require('express');
const port = 8600;
const cors = require('cors')
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema');

app.use(cors())

app.use('/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql:true
    })
)

app.listen(port,() => {
    console.log(`Listing to port ${port}`)
})