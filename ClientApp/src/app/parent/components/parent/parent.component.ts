import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  parentMessage:string='';
  messageFromChild:string='';
  receiveData(data:string){
    this.messageFromChild=data;
  }

}
