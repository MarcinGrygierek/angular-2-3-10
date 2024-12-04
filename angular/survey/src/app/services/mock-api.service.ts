import { inject, Injectable } from '@angular/core';
import { SurveyDto } from '../dto/survey';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  http = inject(HttpClient);

  saveSurvey(surveyDto: SurveyDto) {
    this.http.post<SurveyDto>('http://example.com', surveyDto).subscribe();
  }
}
