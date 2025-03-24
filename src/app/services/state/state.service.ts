import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, inject } from "@angular/core";
import { map, of, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
  private platformId = inject(PLATFORM_ID);

  private timeToLetPass = 3000;

  private finishedMessage$ = isPlatformBrowser(this.platformId)
    ? timer(this.timeToLetPass).pipe(map(() => "finished!"))
    : of("(and will replace this)");

  state$ = this.finishedMessage$.pipe(
    map((finishedMessage) => {
      return {
        someNumbers: [1, 2, 3],
        finishedMessage,
        platform: isPlatformBrowser(this.platformId) ? "Browser" : "Server",
      };
    }),
  );
}
