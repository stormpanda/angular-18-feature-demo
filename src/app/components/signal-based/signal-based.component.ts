import { Component, effect, input, output } from "@angular/core";

@Component({
  selector: "app-signal-based",
  standalone: true,
  imports: [],
  templateUrl: "./signal-based.component.html",
  styleUrl: "./signal-based.component.scss",
})
export class SignalBasedComponent {
  number = input<number>(0);
  processEvenNumbers = output<number>();

  constructor() {
    effect(() => {
      if (this.number() % 2 === 0) {
        this.processEvenNumbers.emit(this.number());
      }
    });
  }
}
