import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightFilter } from "../../shared/models/FlightFilter";

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {
  filterFormControls: FormGroup;
  @Output() filterChanged = new EventEmitter<FlightFilter>();
  constructor(private formBuilder: FormBuilder) { };

  ngOnInit(): void {
    this.filterFormControls = this.formBuilder.group({
      origin: [""],
      destination: [""],
      departureDateRange: this.formBuilder.group({
        start: [""],
        end: new FormControl(""),
      })
    });
    this.filterFormControls.valueChanges.subscribe((formValues) => {
      this.filterChanged.emit(this.buildFilter(formValues));
    });
  }
  buildFilter(formValues): FlightFilter {
    const { origin, destination, departureDateRange } = formValues;
    return {
      origin: origin?.toUpperCase(),
      destination: destination?.toUpperCase(),
      departureDateRange: <[Date?, Date?]>[
        departureDateRange.start ? new Date(departureDateRange.start) : null,
        departureDateRange.end ? new Date(departureDateRange.end) : null,
      ].filter(date => date)
    };
  }
}
