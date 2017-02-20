export enum PropertyType { String, Date, DateTime, Boolean };

export class IPropertyPair {
    public name: string;
    public value: string;
    public type: PropertyType;
}

export class PropertyPair implements IPropertyPair {
    constructor(public name:string, public value:string, public type:PropertyType) {    }
}

export interface IProperty {
    instanceId: string;
    description: string;
    standardProps: Object;
    
    addStandardProp(name:string,value:string, type:PropertyType):void;
    getStandardPropArray(): IPropertyPair[];

    setCustomProps(props:Object):void;
    getCustomProps():Object;

    addCustomProp(name:string,value:string, type:PropertyType):void;
    getCustomPropArray(): IPropertyPair[];
}

export class Property implements IProperty {
    constructor(public instanceId: string,
                public description: string,
                public standardProps: Object) {        }

    private customProps: object;

    setCustomProps(props: Object): void {
        this.customProps = props;
    }

    getCustomProps(): Object {
        return this.customProps;
    }

    standardPropsArray: Array<IPropertyPair> = new Array<IPropertyPair>();
    customPropsArray: Array<IPropertyPair> = new Array<IPropertyPair>();

    addStandardProp(name: string, value: string, type: PropertyType):void {
        this.standardPropsArray.push(new PropertyPair(name,value,type));
    }             

    getStandardPropArray(): IPropertyPair[] {
        return this.standardPropsArray;
    }  

    addCustomProp(name: string, value: string, type: PropertyType):void {
        this.customPropsArray.push(new PropertyPair(name,value,type));
    }             

    getCustomPropArray(): IPropertyPair[] {
        return this.customPropsArray;
    }   

}

