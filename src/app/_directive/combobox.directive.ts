import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appCombobox]'
})

export class ComboBoxDirective {

    @HostBinding('class.open') estado: boolean = false;

    constructor() { }

    @HostListener('click') habilitar() {
        this.estado = !this.estado;
    }


}  