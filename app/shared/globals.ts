import { IRepository} from '../pw/repositories/repository';

export class Globals {
    private static instance: Globals;

    constructor() {
        if (Globals.instance) {
            throw new Error("Error - use Globals.getInstance()");
        } 
    }

    static getInstance(): Globals {
        Globals.instance = Globals.instance || new Globals();
        return Globals.instance;
    }

    currentRepository: IRepository;
    version: string = "2.1";

    setRepository(repository: IRepository) {
        this.currentRepository = repository;
    }

    getRepository(): IRepository {
        return this.currentRepository;
    }

    getBaseUrl(): string {
        return "https://pwapp.metroselskabet.dk/bwsg/v2.4";
    }
    
}