import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { interval, map, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
  state$ = (isPlatformBrowser(this.platformId) ? interval(1000) : of(0)).pipe(
    map((value) => {
      return {
        timePassedInSeconds: value,
        platform: isPlatformBrowser(this.platformId) ? "Browser" : "Server",
      };
    })
  );

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
}
