
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule,  TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-myconetent',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './myconetent.component.html',
  styleUrl: './myconetent.component.scss'
})
export class MyconetentComponent implements AfterViewInit{

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient) {} // Use constructor injection instead

  ngAfterViewInit(): void {
    this.chechBox();
  }

  chechBox() {
    const checkbox: any = document.querySelector("#check");
    const billingItems = document.querySelectorAll('#submit');
    checkbox.addEventListener("change", () => {
      billingItems.forEach((item: any) => {
        item.disabled = !item.disabled;
      });
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('send');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('send');
      ngForm.resetForm();
    }
  }
}

