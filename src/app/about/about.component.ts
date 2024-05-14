import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutImageUrl:string="../../assets/images/port.jpeg"

  user ={
    
    name:"Anshad.T",

    degree:"B-Tech",

    Dob:"May 22 1998",

    phone:"8089760457",

    email:"anshadthorappa@gmail.com",

    address:"123 abc stree 456 pin usa",

    freelance:"Available",

    experience:"Internship"
 


  }

}
