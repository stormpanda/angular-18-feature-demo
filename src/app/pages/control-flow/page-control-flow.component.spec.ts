import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageControlFlowComponent } from "./page-control-flow.component";

describe("PageControlFlowComponent", () => {
  let component: PageControlFlowComponent;
  let fixture: ComponentFixture<PageControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageControlFlowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
