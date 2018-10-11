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

  it('debería pintar 5 tareas en la columnas de TODO', () => {
    const tareas = fixture.debugElement.queryAll(By.css('div[name="TODO"] li'));

    const [task1, task2, task3, task4, task5] = tareas;

    expect(tareas.length).toBe(5);
    expect(task1.nativeElement.textContent).toBe('Task 1');
    expect(task2.nativeElement.textContent).toBe('Task 2');
    expect(task3.nativeElement.textContent).toBe('Task 3');
    expect(task4.nativeElement.textContent).toBe('Task 4');
    expect(task5.nativeElement.textContent).toBe('Task 5');
  });
});
