import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageSignalsComponent } from "./page-signals.component";

describe("SignalsComponent", () => {
  let component: PageSignalsComponent;
  let fixture: ComponentFixture<PageSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
