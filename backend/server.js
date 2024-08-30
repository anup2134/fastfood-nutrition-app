import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`port listening at ${process.env.PORT}`);
});
