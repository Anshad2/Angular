import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string="Anshad T"

  profiletitle:string="Python FullStack Developer" //string interpolation {{expression}} : one way from data source to view target 

  profilePicture:string="../../assets/images/anshu1.jpg" //property binding:[attributes]


}
