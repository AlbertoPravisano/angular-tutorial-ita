import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProvaLifecicleComponent } from './prova-lifecicle/prova-lifecicle.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './direttive/highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    ProvaLifecicleComponent,
    CommonModule,
    HighlightDirective,
    NavbarComponent,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-tutorial-ita';
  destroyProvaLyfecylce = false;
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;
  @ViewChild('destroyable') destroyable!: ElementRef<ProvaLifecicleComponent>;

  ngOnInit() {
    console.log('ngOnInit', this.inputSaluti?.nativeElement?.value);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.inputSaluti?.nativeElement?.value);
  }

  onRiceviDatiEvento(dato: string) {
    console.log(dato);
  }

  distruggi() {
    this.destroyProvaLyfecylce = true;
    console.log('AppComponent.onDestroy()');
  }
}
