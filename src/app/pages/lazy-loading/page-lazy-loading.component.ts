import { AsyncPipe, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { StateService } from "../../services/state/state.service";

@Component({
  selector: "app-page-lazy-loading",
  imports: [NgIf, AsyncPipe],
  templateUrl: "./page-lazy-loading.component.html",
  styleUrl: "./page-lazy-loading.component.scss",
})
export class PageLazyLoadingComponent {
  stateService = inject(StateService);
}

export default PageLazyLoadingComponent;
