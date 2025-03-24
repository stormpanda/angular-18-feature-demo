import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, RouterLink],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "angular-18-feature-demo";

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  getPlatformName() {
    return isPlatformBrowser(this.platformId) ? "Browser" : "Server";
  }
}
