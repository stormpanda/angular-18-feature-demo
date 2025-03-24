import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { DeferredComponent } from "../../components/deferred/deferred.component";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-control-flow",
  imports: [AsyncPipe, DeferredComponent],
  templateUrl: "./page-control-flow.component.html",
  styleUrl: "./page-control-flow.component.scss",
})
export class PageControlFlowComponent {
  constructor(public stateService: StateService) {}
}

export default PageControlFlowComponent;
