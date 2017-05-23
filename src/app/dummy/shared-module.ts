import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import {HeaderComponent} from "./header/header.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ButtonComponent, HeaderComponent ],
    exports:      [ ButtonComponent, HeaderComponent]
})
export class SharedModule { }
