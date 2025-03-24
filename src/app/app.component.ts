import { isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);

  title = "angular-18-feature-demo";

  getPlatformName() {
    return isPlatformBrowser(this.platformId) ? "Browser" : "Server";
  }
}
