import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class SearchFormComponent implements OnInit {
 
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter<string>();
 
  searchForm: FormGroup = this.formBuilder.group({});
 
  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
 
  onSubmit(): void {
    if (this.searchForm.valid) {
      const cityValue = this.searchForm.get('city')?.value;
      this.formSubmitted.emit(cityValue);
    }
  }
}