import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
   userName: string ="Camila Guamán";
   theme: string= "";
   widthMenu: number= 50;
   visibleMenu: boolean= true;
   visibleMenu1: boolean= true;
   
   alternateVisibility():void{//alterna la visibilidad del menu
    this.visibleMenu=!this.visibleMenu;
   }
   alternateVisibility1():void{//alterna la visibilidad del menu
    this.visibleMenu1=!this.visibleMenu1;
   }
    initialTheme: string = "";
   setTheme(color:string):void{ //Cambia el color del menu
    if (this.theme === color) {
      this.theme = this.initialTheme;
    } else {
      this.initialTheme = this.theme;
      this.theme = color;
   }
   }

   sentSize():void{
    this.widthMenu+=10;
    if(this.widthMenu>100){
      this.widthMenu=50;
    }
   }
}
