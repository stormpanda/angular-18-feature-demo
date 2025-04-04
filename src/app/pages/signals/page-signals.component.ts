import { Component, computed, effect, signal, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { SignalBasedComponent } from "../../components/signal-based/signal-based.component";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-signals",
  templateUrl: "./page-signals.component.html",
  styleUrl: "./page-signals.component.scss",
  imports: [SignalBasedComponent],
})
export class PageSignalsComponent {
  stateService = inject(StateService);

  state = toSignal(this.stateService.state$);
  number = signal(0);
  numberSquared = computed(() => this.number() ** 2);

  constructor() {
    effect(() => {
      console.log("From effect: Number changed to", this.number());
    });
  }

  addOne() {
    this.number.set(this.number() + 1);
  }

  logNumber(number: number) {
    console.log("From Output: This is an even number", number);
  }
}

export default PageSignalsComponent;
