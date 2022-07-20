import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import gamesRoutes from './routes/gamesRoutes'

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes() {
        this.app.use(indexRoutes)
        this.app.use('/api/games',gamesRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor iniciado en puerto " + this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();