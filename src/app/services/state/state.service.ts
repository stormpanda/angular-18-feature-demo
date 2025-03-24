import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { map, of, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
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

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
}
