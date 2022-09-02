const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./utils/config.env" });

// El proyecto hace una petición a un archivo llamado config.env en la carpeta utils haciendo uso de la libreria dotenv

// const client = require("./utils/db");
// client.connect();

/* 
La conexion esta comentada hasta que la base de datos permita la entrada de IPs externas
error: no pg_hba.conf entry for host "XX.XX.XXX.XX", user "JEspi", database "jobapp", SSL off
*/

const userRoutes = require("./routes/user.routes");
const loginRoutes = require("./routes/login.routes");
const logoutRoutes = require("./routes/logout.routes");
const searchRoutes = require("./routes/search.routes");
const adsRoutes = require("./routes/ads.routes");
const favoritesRoutes = require("./routes/favorites.routes");
const recoverPasswordRoutes = require("./routes/recoverpassword.routes");
const restorePasswordRoutes = require("./routes/restorepassword.routes");

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/ads", adsRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/recoverpassword", recoverPasswordRoutes);
app.use("api/restorepassword", restorePasswordRoutes);

app.listen(302, () => {
  console.log("Aplicación iniciada en el puerto 302");
});
