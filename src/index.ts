import express, { Application } from 'express';
import { BebidasController, BebidasSemAlcoolController, BebidasComAlcoolController } from './controllers/BebidasController';
import { ComidasController, AdicionaisController, SobreMesaController } from './controllers/ComidasController';

const index: Application = express();
const port = 3000;

// Controllers
const bebidasController = new BebidasController();
const bebidasSemAlcoolController = new BebidasSemAlcoolController();
const bebidasComAlcoolController = new BebidasComAlcoolController();
const comidasController = new ComidasController();
const adicionaisController = new AdicionaisController();
const sobremesaController = new SobreMesaController();

// Rotas para bebidas
index.get('/bebidas', bebidasController.getBebidas);
index.get('/bebidas/semAlcool/suco', bebidasSemAlcoolController.getSucos);
index.get('/bebidas/semAlcool/refrigerante', bebidasSemAlcoolController.getRefrigerantes);
index.get('/bebidas/comAlcool/caipirinha', bebidasComAlcoolController.getCaipirinhas);
index.get('/bebidas/comAlcool/dose', bebidasComAlcoolController.getDoses);
index.get('/bebidas/comAlcool/batida', bebidasComAlcoolController.getBatidas);
index.get('/bebidas/comAlcool/cerveja', bebidasComAlcoolController.getCervejas);

// Rotas para comidas
index.get('/comidas', comidasController.getComidas);
index.get('/comidas/:id/detalhes', comidasController.getComidaDetalhes);
index.get('/comidas/adeicionaisParaLanche', adicionaisController.getAdicionaisParaLanche);

// Rota para sobremesas
index.get('/sobreMesa', sobremesaController.getSobremesas);

index.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
