import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /** Form add item. */
  form!: FormGroup;

  items: Item[] = [];

  get total(): number {
    return this.items.reduce((previous, current) => {
      return previous + current.value;
    }, 0);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      value: [0, Validators.required],
    });
  }

  addItem(): void {
    this.items.push(this.form.value);
  }
}
