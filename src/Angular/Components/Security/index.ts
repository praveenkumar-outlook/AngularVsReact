import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  template: require('./index.html'),
  styleUrls: []
})
export class SecurityComponent {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}
