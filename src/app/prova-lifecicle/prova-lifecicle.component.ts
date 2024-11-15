import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prova-lifecicle',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './prova-lifecicle.component.html',
  styleUrl: './prova-lifecicle.component.css',
})
export class ProvaLifecicleComponent
  implements
    OnInit,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked
{
  constructor() {
    console.log('constructor');
  }

  @Output() mandaDatiAPadre = new EventEmitter<string>();
  mandaDati() {
    this.mandaDatiAPadre.emit(this.datoAPadre);
  }

  @Output() onDistruggi = new EventEmitter<void>();
  distruggi() {
    this.onDistruggi.emit();
  }

  datoAPadre = 'ciao';
  buttonText = 'Destroy me';
  isButtonDisabled = false;

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  onDestroy(event?: Event) {
    console.log(<HTMLButtonElement>event?.target);
    this.buttonText = 'Cliccato';
    this.distruggi();
  }
}
