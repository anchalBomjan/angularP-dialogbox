import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'parent',
    loadChildren:()=>import('./parent/parent.module').then(m=>m.ParentModule)
  },

{
  path:'', redirectTo:'parent',pathMatch:'full'
}


];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
