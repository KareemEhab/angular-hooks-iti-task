import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() productEmitter = new EventEmitter<any>();

  productForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(null, Validators.required),
    imageUrl: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^https?:\/\/.+/),
    ]),
    rate: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  get nameValid() {
    return this.productForm.controls.name.valid;
  }

  get descriptionValid() {
    return this.productForm.controls.description.valid;
  }

  get imageUrlValid() {
    return this.productForm.controls.imageUrl.valid;
  }

  get rateValid() {
    return this.productForm.controls.rate.valid;
  }

  submit() {
    if (this.productForm.valid) {
      this.productEmitter.emit({
        productName: this.productForm.value.name,
        productDescription: this.productForm.value.description,
        imgUrl: this.productForm.value.imageUrl,
        rate: this.productForm.value.rate,
      });

      this.productForm.reset();
    }
  }
}
