import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user',
  template: `Username: {{ username }}`,
})
export class User {
  username = 'youngTech';
}
@Component({
  selector: 'app-root',
  template: `
  <div [contentEditable]="isEditable">
    You can edit this text!
  </div>
`,
  imports: [User],
})

export class App {
  isServerRunning = true;
}

export class App1 {
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
export class App3 {
  isEditable = true;
}

