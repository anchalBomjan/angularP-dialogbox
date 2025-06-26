import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [ParentComponent,ChildComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ParentModule { }
