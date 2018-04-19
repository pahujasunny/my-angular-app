import { Component } from '@angular/core';
import { HeroModel } from '../classes/HeroModal';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class CustomFormsComponent {

    // Default Values:to be used by form for prefilling
    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

    model = new HeroModel(18, 'Dr IQ',
    this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() { this.submitted = true; }

    newHero() {
      console.log('newHero is called.')
    }
}
