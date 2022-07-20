import { Router } from 'express'

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', (req, res) => {
            res.send('Juegos')
        })
    }
}

const gamesRoutes = new GamesRoutes()
export default gamesRoutes.router