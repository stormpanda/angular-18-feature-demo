import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageLazyOneComponent } from "./page-lazy-one.component";

describe("LazyPageOneComponent", () => {
  let component: PageLazyOneComponent;
  let fixture: ComponentFixture<PageLazyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLazyOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageLazyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
