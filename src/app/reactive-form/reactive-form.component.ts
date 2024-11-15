import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { TraduciPipe } from '../direttive/traduci.pipe';
// import { HeroService } from '../direttive/hero.service';

// Reusable animation
// https://angular.dev/guide/animations/reusable-animations
// const transitionAnimation = animation([
//   style({
//     height: '{{ height }}',
//     opacity: '{{ opacity }}',
//     backgroundColor: '{{ backgroundColor }}',
//   }),
//   animate('{{ time }}'),
// ]);

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, TraduciPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      // transition('open => closed', [
      //   useAnimation(transitionAnimation, {
      //     params: {
      //       height: 0,
      //       opacity: 1,
      //       backgroundColor: 'red',
      //       time: '1s',
      //     },
      //   }),
      // ]),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class ReactiveFormComponent {
  // https://angular.dev/tutorials/learn-angular/21-constructor-based-di
  // constructor(private heroService: HeroService) {}
  // heroService = inject(HeroService);
  // ngOnInit() {
  //   console.log(this.heroService.getHeroes());
  // }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
