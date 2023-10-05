const express = require('express');
const  serverless = require('serverless-http')
const { BebidasController, BebidasSemAlcoolController, BebidasComAlcoolController } = require('./controllers/BebidasController');
const { ComidasController, AdicionaisController, SobreMesaController } = require('./controllers/ComidasController');

const app = express();
const router = express.Router();
const port = 3000;

// Rotas para bebidas
router.get('/', "App runnig");
router.get('/bebidas', BebidasController.getBebidas);
router.get('/bebidas/semAlcool/suco', BebidasSemAlcoolController.getSucos);
router.get('/bebidas/semAlcool/refrigerante', BebidasSemAlcoolController.getRefrigerantes);
router.get('/bebidas/comAlcool/caipirinha', BebidasComAlcoolController.getCaipirinhas);
router.get('/bebidas/comAlcool/dose', BebidasComAlcoolController.getDoses);
router.get('/bebidas/comAlcool/batida', BebidasComAlcoolController.getBatidas);
router.get('/bebidas/comAlcool/cerveja', BebidasComAlcoolController.getCervejas);

// Rotas para comidas
router.get('/comidas', ComidasController.getComidas);
router.get('/comidas/:id/detalhes', ComidasController.getComidaDetalhes);
router.get('/comidas/adeicionaisParaLanche', AdicionaisController.getAdicionaisParaLanche);

// Rota para sobremesas
router.get('/sobreMesa', SobreMesaController.getSobremesas);

router.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use('/.netlify/functions/api', router);
exports.handler = serverless;
