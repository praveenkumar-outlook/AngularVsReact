import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
  template: require('./index.html')
})
export default class App extends Vue { }