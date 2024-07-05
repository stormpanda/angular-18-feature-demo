import { Routes } from "@angular/router";
import PageHomeComponent from "./pages/home/page-home.component";

export const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent,
    //loadComponent: () => import("./pages/home/home.component"),
  },
  {
    path: "lazy-page-one",
    loadComponent: () => import("./pages/lazy-one/page-lazy-one.component"),
  },
];
