export interface IDocument {
    documentCode: string;
    instanceId: string;
    description: string;
    properties: Object;
}

export class Document implements IDocument {

    constructor(public documentCode: string,
                public instanceId: string,
                public description: string,
                public properties: Object) {        }

}