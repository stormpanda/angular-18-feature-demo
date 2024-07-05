import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageLazyLoadingComponent } from "./page-lazy-loading.component";

describe("LazyPageOneComponent", () => {
  let component: PageLazyLoadingComponent;
  let fixture: ComponentFixture<PageLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLazyLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
