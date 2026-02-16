import { RouterOutlet } from '@angular/router';
import { Component, input } from '@angular/core';



@Component({
  selector: 'app-user',
  template: `Username: {{ username }}`,
})
export class User {
  name = input<string>();
}
@Component({
  selector: 'app-root',
  template: `<p>The user's name is {{ name() }}</p>`,
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


