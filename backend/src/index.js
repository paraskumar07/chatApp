import express from 'express';
const app = express();


app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes)

app.listen(5001, console.log("app is listening on port 5001"));

