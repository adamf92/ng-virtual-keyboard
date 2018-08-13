import { Component, AfterViewInit, Input } from '@angular/core';
import { IQwertyKeysLine } from '../models/qwerty-keyboard.model';

@Component({
    selector: 'af-vk-line',
    templateUrl: 'line.component.html',
    styleUrls: ['line.component.scss']
})

export class AfVkLineComponent implements AfterViewInit {

    @Input('line') public line: IQwertyKeysLine;

    constructor() { }

    ngAfterViewInit() { }

    public isTabKey(key: string): boolean {
        return key === 'tab';
    }

    public isCapsLockKey(key: string): boolean {
        return key === 'caps-lock';
    }

    public isLShiftKey(key: string): boolean {
        return key === 'l-shift';
    }

    public isRShiftKey(key: string): boolean {
        return key === 'r-shift';
    }

    public isLAltKey(key: string): boolean {
        return key === 'l-alt';
    }

    public isRAltKey(key: string): boolean {
        return key === 'r-alt';
    }

    public isSpaceKey(key: string): boolean {
        return key === 'space';
    }

    public isLeftKey(key: string): boolean {
        return key === 'left';
    }

    public isRightKey(key: string): boolean {
        return key === 'right';
    }

    public isEnterKey(key: string): boolean {
        return key === 'enter';
    }

    public isBackspaceKey(key: string): boolean {
        return key === 'backspace';
    }
}
