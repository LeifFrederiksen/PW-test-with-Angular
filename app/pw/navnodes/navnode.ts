export interface INavNode {
    instanceId: string;
    properties: Object;

    expand():void;
    collapse():void;
    isExpanded():boolean;
    canExpand():boolean;
    toggle():void;
}

export class NavNode implements INavNode {
    toggle(): void {
        if (this.isExpanded()) {
            this.collapse();
        } else if (this.canExpand()) {
            this.expand();
        }
    }

    private _isExpanded: boolean;

    public expand(): void {
        this._isExpanded = true;
    }
    public collapse(): void {
        this._isExpanded = false;
    }
    public isExpanded(): boolean {
        return this._isExpanded;
    }
    public canExpand(): boolean {
        return true;
    }

    constructor(public instanceId: string,
                public properties: Object) {        }

}