import { Request, Response } from 'express';
import { MenuService } from '../services/MenuService';

const menuService = new MenuService();

export class ComidasController {
  getComidas(req: Request, res: Response) {
    const comidas = menuService.getMenu().comidas;
    res.json(comidas);
  }

  getComidaDetalhes(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const comida = menuService.getMenu().comidas.find((item) => item.id === id);
    if (comida) {
      res.json(comida);
    } else {
      res.status(404).json({ message: 'Comida não encontrada' });
    }
  }
}

export class AdicionaisController {
  getAdicionaisParaLanche(req: Request, res: Response) {
    const adicionais = menuService.getMenu().adicionaisParaLanche;
    res.json(adicionais);
  }
}

export class SobreMesaController {
  getSobremesas(req: Request, res: Response) {
    const sobremesas = menuService.getMenu().sobreMesa;
    res.json(sobremesas);
  }
}
