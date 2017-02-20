export interface IRepository {
    instanceId: string;
    properties: Object
}

export class Repository implements IRepository {

    constructor(public instanceId: string,
                public properties: Object) {        }

}