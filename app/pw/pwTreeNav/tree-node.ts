
export class TreeNode{
  showIcon = false;
  expanded = false;
  icon:any = null;
  constructor(public key:string, public url:string, public name:string){
    if(url){
      this.showIcon = true;
      this.icon = this.getIcon();
    }
  }
  expand(){
    this.expanded = !this.expanded;
    this.icon = this.getIcon();
  }
  private getIcon(){
    if (this.showIcon === true) {
      if(this.expanded){
        return '- ';
      }
      return '+ ';
    }
    return null;
  }
}
