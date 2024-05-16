import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendMessage(nameBox:any,emailBox:any,subjectBox:any,messageBox:any){

    console.log(nameBox.value);
    console.log(emailBox.value);
    console.log(messageBox.value);
    console.log(subjectBox.value);
    

  
  }

}
