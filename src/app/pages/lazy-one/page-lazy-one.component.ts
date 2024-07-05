import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-lazy-one",
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: "./page-lazy-one.component.html",
  styleUrl: "./page-lazy-one.component.scss",
})
export class PageLazyOneComponent {
  constructor(public stateService: StateService) {}
}

export default PageLazyOneComponent;
