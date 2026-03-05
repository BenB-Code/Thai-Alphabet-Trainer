import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { PronunciationSwitchItem } from '../../shared/interfaces';
import { IPA, LARGE, RTGS } from '../../shared/constants';

@Component({
  selector: 'app-pronunciation-switch-selector',
  imports: [SwitchSelector],
  templateUrl: './pronunciation-switch-selector.html',
  styleUrl: './pronunciation-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PronunciationSwitchSelector {
  protected readonly appStoreService = inject(AppStoreService);

  protected readonly activePronunciationIndex = computed(() => {
    const font = this.appStoreService.pronunciation();
    return this.pronunciationsList.findIndex(f => f.class === font);
  });

  readonly pronunciationsList: PronunciationSwitchItem[] = [
    {
      label: { display: true, text: RTGS.toUpperCase() },
      icon: { display: false, path: '', alt: '', right: false },
      id: 0,
      class: RTGS,
    },
    {
      label: { display: true, text: IPA.toUpperCase() },
      icon: { display: false, path: '', alt: '', right: false },
      id: 1,
      class: IPA,
    },
  ];

  activeId(id: number) {
    this.appStoreService.switchPronunciation(this.pronunciationsList[id].class);
  }

  protected readonly LARGE = LARGE;
}
