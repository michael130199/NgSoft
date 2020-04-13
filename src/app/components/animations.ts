import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0.2,
                transform: 'translateY(-11%)'
            }),
            animate('450ms linear'),
            style({
                opacity: 1,
                transform: 'translateY(0)'
            })
        ])
    ])