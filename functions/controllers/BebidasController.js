const { Request, Response } = require('express');
const { MenuServices } = require('../services/MenuServices')
class BebidasController {
  getBebidas(req, res) {
    const bebidas = MenuServices.bebidas;
    res.json(bebidas);
  }
}

class BebidasSemAlcoolController {
  getSucos(req, res) {
    const sucos = MenuServices.bebidas.semAlcool.suco;
    res.json(sucos);
  }

  getRefrigerantes(req, res) {
    const refrigerantes = MenuServices.bebidas.semAlcool.refrigerante;
    res.json(refrigerantes);
  }
}

class BebidasComAlcoolController {
  getCaipirinhas(req, res) {
    const caipirinhas = MenuServices.bebidas.comAlcool.caipirinha;
    res.json(caipirinhas);
  }

  getDoses(req, res) {
    const doses = MenuServices.bebidas.comAlcool.dose;
    res.json(doses);
  }

  getBatidas(req, res) {
    const batidas = MenuServices.bebidas.comAlcool.batida;
    res.json(batidas);
  }

  getCervejas(req, res) {
    const cervejas = MenuServices.bebidas.comAlcool.cerveja;
    res.json(cervejas);
  }
}

module.exports = {
  BebidasController,
  BebidasSemAlcoolController,
  BebidasComAlcoolController,
};
