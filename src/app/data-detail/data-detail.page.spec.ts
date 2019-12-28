import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataDetailPage } from './data-detail.page';

describe('DataDetailPage', () => {
  let component: DataDetailPage;
  let fixture: ComponentFixture<DataDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
