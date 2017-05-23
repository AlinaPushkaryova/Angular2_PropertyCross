import { Component, Input } from '@angular/core';

@Component ({
    selector: 'pc-button',
    template: `
<button type="button">{{text}} </button>
`
})

export class ButtonComponent {
    @Input() text: string;


}