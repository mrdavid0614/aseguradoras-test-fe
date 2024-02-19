import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceCarrierFormComponent } from './insurance-carrier-form.component';

describe('InsuranceCarrierFormComponent', () => {
  let component: InsuranceCarrierFormComponent;
  let fixture: ComponentFixture<InsuranceCarrierFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCarrierFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceCarrierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
