import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IQwertyKeyboard } from '../models/qwerty-keyboard.model';
import { Ng2VkService, ThemeColors } from '../services/virtual-keyboard.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
    selector: 'vk-keyboard',
    templateUrl: 'virtual-keyboard.component.html',
    styleUrls: ['virtual-keyboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('vkToggle', [
            state('void', style({ transform: 'translateY(100%)' })),
            state('*', style({ transform: 'translateY(0%)' })),
            transition('void <=> *', animate('600ms ease-in-out'))
        ])
    ]
})
export class AfVirtualKeyboardComponent {

    constructor(
        private _service: Ng2VkService
    ) {}

    public getQwertyKeyboard(): Observable<IQwertyKeyboard> {
        return this._service.getKeyboardModel();
    }

    /**
     * Get Open State
     *
     * Get async open state of keyboard
     */
    public getOpenState(): Observable<boolean> {
        return this._service.getOpenState();
    }

    public focus(): void {
        this._service.focus$.emit();
    }

    public getThemeColor(): Observable<ThemeColors> {
        return this._service.colorChange$.asObservable();
    }

}
