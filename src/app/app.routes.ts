import { Routes } from "@angular/router";
import PageHomeComponent from "./pages/home/page-home.component";

export const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent,
    //loadComponent: () => import("./pages/home/home.component"),
  },
  {
    path: "lazy-loading",
    loadComponent: () =>
      import("./pages/lazy-loading/page-lazy-loading.component"),
  },
  {
    path: "control-flow",
    loadComponent: () =>
      import("./pages/control-flow/page-control-flow.component"),
  },
  {
    path: "signals",
    loadComponent: () => import("./pages/signals/page-signals.component"),
  },
];
