import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SingleElement } from '../types';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  constructor(private dataService: DataService) { }

  data: SingleElement[] = [];
  visible: boolean = true;

  ngOnInit(): void {
      this.data = this.dataService.getData();
  }

  toggle() {
    this.visible = !this.visible;
  }
}
