const express = require("express");
const app = express();
const cors = require("cors");


const db = require("./models");
const PORT = 3001;
app.use(express.json());
app.use(cors());
//Routers
const postRouter=require("./routes/Posts");
app.use("/posts",postRouter);

const commentRouter=require("./routes/Comments");
app.use("/comments",commentRouter);

const usersRouter=require("./routes/Users");
app.use("/auth",usersRouter);

const likesRouter=require("./routes/Likes");
app.use("/likes",likesRouter);

db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{console.log("server is running on port 3001");
});
});
