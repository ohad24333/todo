import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo1Component } from './todo1/todo1.component';
import { ChildeComponent } from './childe/childe.component';
import { FatherComponent } from './father/father.component';
import { TagsComponent } from './tags/tags.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PipesComponent } from './pipes/pipes.component';
import { CostumePipe } from './pipes/costume.pipe';
import { BtcusdPipe } from './pipes/btcusd.pipe';
import { FormsValidationsComponent } from './forms-validations/forms-validations.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FirtsComponent } from './firts/firts.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    Todo1Component,
    ChildeComponent,
    FatherComponent,
    TagsComponent,
    TemperatureComponent,
    PipesComponent,
    CostumePipe,
    BtcusdPipe,
    FormsValidationsComponent,
    AddUserComponent,
    FirtsComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
