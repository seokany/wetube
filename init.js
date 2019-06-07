import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Litening on: https://localhost${PORT}`);

app.listen(PORT, handleListening);
