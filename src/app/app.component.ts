import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectPresentation';
  @Input() cartNumber: number = 0;

  addCart(){
    this.cartNumber++;
  }
}
