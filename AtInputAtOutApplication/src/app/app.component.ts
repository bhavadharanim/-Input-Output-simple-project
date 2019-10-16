import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bhavadharani';
  public Name="";
  public Email="";
  public name;

  
  onClick(){
    this.name=this.Name;
  }
}
