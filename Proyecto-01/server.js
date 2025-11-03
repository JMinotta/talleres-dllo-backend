import express from "express";
import cors from "cors";


import taller1Routes from "./routes/taller-01.routes.js";
import taller2Routes from "./routes/taller-02.routes.js";
import taller3Routes from "./routes/taller-03.routes.js";




const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/taller1", taller1Routes);
app.use("/api/taller2", taller2Routes);
app.use("/api/taller3", taller3Routes);


function routeNotFound(request, response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
