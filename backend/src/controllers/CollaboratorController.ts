import { Request, Response } from "express";

const users = [{
    id: 1,
    name: 'Breno Antonuci',
    daily: 80,
    img: "https://pps.whatsapp.net/v/t61.24694-24/296382848_2043939489147034_4922993359540829619_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSVAFAahqSp3OkGAmz_DLeqJd5-ZbansV3zV6KRqERVbw&oe=645EA4BB"
},{
    id: 2,
    name: 'Lucas Paris',
    daily: 90,
    img: "https://pps.whatsapp.net/v/t61.24694-24/302012480_5782184905127505_8589826288358134046_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS8W_RJOWlOShFljv0UWEURqidNXE6F6ighBw8wSF89sg&oe=645FE48A"
}];

class CollaboratorController {
    public async getCollaborators(req: Request, res: Response): Promise<Response>{
        return res.json(users);
    }
    
    public async createCollaborator(req: Request, res: Response): Promise<Response>{
        const user = await User.create(req.body);
        return res.json(user);
    }
}

export default new CollaboratorController();