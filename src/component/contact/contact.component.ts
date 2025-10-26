import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Anaelle2028',
      icon: '💻'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anaëlle-faure',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:anaelle.faure@epitech.eu',
      icon: '📧'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Formulaire soumis:', this.contactForm.value);
    this.successMessage = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
    
    setTimeout(() => {
      this.contactForm.reset();
      this.submitted = false;
      this.successMessage = '';
    }, 3000);
  }
}
