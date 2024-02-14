import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';

 
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SearchFormComponent,
    HttpClientModule
  ],
  providers: [WeatherService], 
})
export class AppComponent {

  
  weatherData = {};

  constructor(private weatherService: WeatherService) { }
 
  handleFormSubmission(city: string): void {
    console.log('Form submitted with city:', city);
    // Handle the form value here

    this.weatherService.searchWeatherByCity(city).subscribe(response => {
      console.log('Weather response:', response);
      console.log(typeof response);
      // Handle the weather response here
      this.weatherData = response; 
      
      //console.log('test', this.weatherData.name, this.weatherData.main);
      

    });

    console.log(this.weatherData);
  }

  
 
 
  title = 'Weather App';
}