import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-control-flow",
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: "./page-control-flow.component.html",
  styleUrl: "./page-control-flow.component.scss",
})
export class PageControlFlowComponent {
  constructor(public stateService: StateService) {}
}

export default PageControlFlowComponent;
