import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'Security',
  template: require('./index.html')
})
export default class Security extends Vue {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}