import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'Hello',
  template: require('./index.html')
})
export default class Hello extends Vue { }