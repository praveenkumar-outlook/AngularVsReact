import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'NotFound',
  template: require('./index.html')
})
export default class NotFound extends Vue { }