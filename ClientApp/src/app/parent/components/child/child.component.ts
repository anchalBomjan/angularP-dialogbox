import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() dataFromParent:string=''; ///Reciving data
  @Output() dataToParent=new EventEmitter<string>(); /// sending data
  childMessage:string='';


  sendToParent(){
    this.dataToParent.emit(this.childMessage);
  }
  

}
