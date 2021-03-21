import { Observable } from 'rxjs';
import { LabelValuePair } from './label-value-pair.interface';

export interface FormInputSelectCustomConfig {
  options: Array<LabelValuePair> | Observable<LabelValuePair[]>;
}
