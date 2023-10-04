import express, { Application } from 'express';
import { BebidasController, BebidasSemAlcoolController, BebidasComAlcoolController } from './controllers/BebidasController';
import { ComidasController, AdicionaisController, SobreMesaController } from './controllers/ComidasController';

const app: Application = express();
const port = 3000;

// Controllers
const bebidasController = new BebidasController();
const bebidasSemAlcoolController = new BebidasSemAlcoolController();
const bebidasComAlcoolController = new BebidasComAlcoolController();
const comidasController = new ComidasController();
const adicionaisController = new AdicionaisController();
const sobremesaController = new SobreMesaController();

// Rotas para bebidas
app.get('/bebidas', bebidasController.getBebidas);
app.get('/bebidas/semAlcool/suco', bebidasSemAlcoolController.getSucos);
app.get('/bebidas/semAlcool/refrigerante', bebidasSemAlcoolController.getRefrigerantes);
app.get('/bebidas/comAlcool/caipirinha', bebidasComAlcoolController.getCaipirinhas);
app.get('/bebidas/comAlcool/dose', bebidasComAlcoolController.getDoses);
app.get('/bebidas/comAlcool/batida', bebidasComAlcoolController.getBatidas);
app.get('/bebidas/comAlcool/cerveja', bebidasComAlcoolController.getCervejas);

// Rotas para comidas
app.get('/comidas', comidasController.getComidas);
app.get('/comidas/:id/detalhes', comidasController.getComidaDetalhes);
app.get('/comidas/adeicionaisParaLanche', adicionaisController.getAdicionaisParaLanche);

// Rota para sobremesas
app.get('/sobreMesa', sobremesaController.getSobremesas);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
