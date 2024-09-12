const app = require('./app');
const host = '127.0.0.1';
const port = 3001;
const server = app.listen(port, host, () => {
    console.log(
        'Node server is listening to '
        + `http://${server.address().address}:${server.address().port}`
    );
});
