import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import data from "../../../Data/table.json";

@Component({
  name: 'BulkData',
  template: require('./index.html')
})
export default class BulkData extends Vue {
  data: any = data;
}