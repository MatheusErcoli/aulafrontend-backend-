import app from "./app";
import sequelize from "./config/database";

const port = 3000;

async function start() {
  try {
    
    await sequelize.sync({ alter: true });

    app.listen(port, () => {
      console.log('====================================');
      console.log("Servidor rodando na porta " + port);
      console.log('====================================');
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor ou sincronizar o banco:', err);
  }
}

start();