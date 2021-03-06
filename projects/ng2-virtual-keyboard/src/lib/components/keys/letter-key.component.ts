import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AfVkAbstractKeyComponent } from './abstract-key.component';
import { Ng2VkService } from '../../services/virtual-keyboard.service';

@Component({
    selector: 'vk-letter-key',
    templateUrl: 'letter-key.component.html',
    styleUrls: ['key.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AfVkLetterKeyComponent extends AfVkAbstractKeyComponent {

    constructor(
        settings: Ng2VkService
      ) {
        super(settings);
    }

}
