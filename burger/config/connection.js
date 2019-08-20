var con = mysql.createConnection({
    host: "",
    PORT: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
});

connection.connect();

module.exports = connection;
