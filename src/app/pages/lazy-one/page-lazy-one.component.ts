import { AsyncPipe, NgIf, isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { interval, map, of } from "rxjs";

@Component({
  selector: "app-page-lazy-one",
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: "./page-lazy-one.component.html",
  styleUrl: "./page-lazy-one.component.scss",
})
export class PageLazyOneComponent {
  state = (isPlatformBrowser(this.platformId) ? interval(1000) : of(0)).pipe(
    map((value) => {
      return {
        timePassedInSeconds: value,
        platform: isPlatformBrowser(this.platformId) ? "Browser" : "Server",
      };
    })
  );

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
}

export default PageLazyOneComponent;
