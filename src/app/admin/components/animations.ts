import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const fadeLateral = 
    trigger('fadeLateral', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-20%)'
            }),
            animate('450ms linear'),
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            })
        ])
    ])