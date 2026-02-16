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
  <section>
    <app-user />
  </section>
`,
  imports: [User],
})

export class App {
  protected readonly title = signal('angular-tutorial');
  city = 'San Francisco';
}
