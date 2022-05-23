import bodyParser from 'body-parser';
import { Server } from 'http';
import './util/module-alias';

// Config do servidor 

export class SetupServer extends Server{
    constructor(private port = 3000){ //config de porta servidor 
        super();
    } 

    public init(): void{
        this.setupExpress();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json())
    }
}