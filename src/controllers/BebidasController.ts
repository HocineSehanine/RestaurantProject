import { Request, Response } from 'express';
import { MenuService } from '../services/MenuService';

const menuService = new MenuService();

export class BebidasController {
  getBebidas(req: Request, res: Response) {
    const bebidas = menuService.getMenu().bebidas;
    res.json(bebidas);
  }
}

export class BebidasSemAlcoolController {
  getSucos(req: Request, res: Response) {
    const sucos = menuService.getMenu().bebidas.semAlcool.suco;
    res.json(sucos);
  }

  getRefrigerantes(req: Request, res: Response) {
    const refrigerantes = menuService.getMenu().bebidas.semAlcool.refrigirante;
    res.json(refrigerantes);
  }
}

export class BebidasComAlcoolController {
  getCaipirinhas(req: Request, res: Response) {
    const caipirinhas = menuService.getMenu().bebidas.comAlcool.caipirinha;
    res.json(caipirinhas);
  }

  getDoses(req: Request, res: Response) {
    const doses = menuService.getMenu().bebidas.comAlcool.dose;
    res.json(doses);
  }

  getBatidas(req: Request, res: Response) {
    const batidas = menuService.getMenu().bebidas.comAlcool.batida;
    res.json(batidas);
  }

  getCervejas(req: Request, res: Response) {
    const cervejas = menuService.getMenu().bebidas.comAlcool.cerveja;
    res.json(cervejas);
  }
}
