import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-33%)'
            }),
            animate('300ms linear'),
            style({
                opacity: 1,
                transform: 'translateY(0)'
            })
        ])
    ])