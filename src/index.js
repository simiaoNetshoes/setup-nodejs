const {app} = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Ex@mple app listening as http://localhost:3000`);
}); 