import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  inputText!: string;

  constructor(private dataService: DataService) {}

  @Output() moviesEmitFromInput: EventEmitter<any> = new EventEmitter<any>();

  moviesFromInput!: [];
  moviesFilterFromService() {
    this.dataService.getMovieByInput(this.inputText).subscribe((data) => {
      this.moviesFromInput = data.results;
      // console.log(this.moviesFromInput);
      this.moviesEmitFromInput.emit(this.moviesFromInput);
    });
  }
}
