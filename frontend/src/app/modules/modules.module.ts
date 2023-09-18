import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponetComponent } from './components/button-componet/button-componet.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponetComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
