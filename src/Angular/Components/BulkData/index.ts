import { Component } from '@angular/core';
import data from "../../../Data/table.json";

@Component({
  selector: 'app-hello',
  template: require('./index.html'),
  styleUrls: []
})
export class BulkDataComponent {
  data: any = data;
}
