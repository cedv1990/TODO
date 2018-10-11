import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { By } from '@angular/platform-browser';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería pintar 3 columnas con cada uno de los estados del TODO list', () => {
    const columnas = fixture.debugElement.queryAll(By.css('.col-4'));
    const [TODO, WIP, DONE] = columnas;

    expect(columnas.length).toBe(3);
    expect(TODO.query(By.css('h2')).nativeElement.textContent).toBe('TODO');
    expect(WIP.query(By.css('h2')).nativeElement.textContent).toBe('WIP');
    expect(DONE.query(By.css('h2')).nativeElement.textContent).toBe('DONE');
  });
});
