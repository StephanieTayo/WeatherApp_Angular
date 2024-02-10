import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component'
 
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SearchFormComponent
  ]
})
export class AppComponent {
 
  handleFormSubmission(city: string): void {
    console.log('Form submitted with city:', city);
    // Handle the form value here
  }
 
 
  title = 'Weather App';
}