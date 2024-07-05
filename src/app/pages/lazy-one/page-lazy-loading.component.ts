import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-lazy-one",
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: "./page-lazy-loading.component.html",
  styleUrl: "./page-lazy-loading.component.scss",
})
export class PageLazyLoadingComponent {
  constructor(public stateService: StateService) {}
}

export default PageLazyLoadingComponent;
