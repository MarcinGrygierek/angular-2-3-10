import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyConfiguratorComponent } from './components/survey-configurator/survey-configurator.component';

@Component({
  selector: 'app-root',
  imports: [SurveyConfiguratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
