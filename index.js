import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello from the server! This is a Node.js application running on port 8080.');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
}); 

