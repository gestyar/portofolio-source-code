import { Component } from '@angular/core';
import { ContactServiceService } from 'src/app/service/contact-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  message : string = '';
  showNotifSuccess: boolean = false;
  showNotifErrorr: boolean = false;
  error: string = "";
  constructor(
    public contactService: ContactServiceService
  ) { }

  onSubmit(event: Event){
    event.preventDefault();
    if(this.formData.name == "" || this.formData.email == "" || this.formData.subject == "" || this.formData.message == ""){
      // "not valid" or emty field 
      // belum bisa pake form valid karena pakai js bawaan
    } else {
      // "valid"
     const bodyReq: any = {
      "to": environment.emailto,
      "subject": this.formData.subject,
      "text": "Saya " + this.formData.name + ", dengan Email " + this.formData.email + " ingin menanyakan terkait: "  + this.formData.message
     }
     this.contactService.apiSendEmail(bodyReq).subscribe(data => {
      if(data.message == 'Your message has been sent. Thank you!'){
        this.message = data.message;
        this.showNotifSuccess = true;
      } else {
        this.message = "Sorry, Failed Send Email";
        this.showNotifErrorr = true;
      }

        // Atur timeout untuk menyembunyikan pesan notifikasi setelah beberapa detik
        setTimeout(() => {
          this.showNotifSuccess = false;
          this.showNotifErrorr = false;
        }, 3000); // Misalnya, akan disembunyikan setelah 3 detik
     }, errorMessage =>{
        this.message = errorMessage;
        this.showNotifErrorr = true;

         // Atur timeout untuk menyembunyikan pesan notifikasi setelah beberapa detik
         setTimeout(() => {
          this.showNotifSuccess = false;
          this.showNotifErrorr = false;
        }, 3000); // Misalnya, akan disembunyikan setelah 3 detik
     })
    }
  }

}
