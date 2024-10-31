
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-myconetent',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './myconetent.component.html',
  styleUrl: './myconetent.component.scss'
})
export class MyconetentComponent implements AfterViewInit {

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = false;

  post = {
    endPoint: 'https://f016f311@eduard-kammerzel.de//sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit(): void {
    this.chechBox();
    this.cangeColor();
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
            ngForm.resetForm();
          },
          error: (error) => {
          },
          complete: () => console.info(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }


  cangeColor() {
    let contact: any = document.getElementById('contact2');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('white');
        } else {
          contact.classList.remove('white');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.target4');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  sendFeedback() {
    let name: any = document.getElementById('name');
    let email: any = document.getElementById('email');
    let message: any = document.getElementById('message');
    let chechBox: any = document.getElementById('check');
    let btn: any = document.getElementById('submit');

    if (message.value != "" && name.value != "" && email.value != "" && email.value.includes('@')) {
      let contant = document.getElementById('feedback');
      contant?.classList.remove('d-none');
      setTimeout(() => {
        contant?.classList.add('d-none');
      }, 1500);
      chechBox.checked = false;
      btn.disabled = true;
    }

  }


}

