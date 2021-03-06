import { ActionType } from 'typesafe-actions';
import { ApplicationRootState } from 'types';
import * as actions from './actions';

/* --- STATE --- */

interface LanguageProviderState {
  readonly locale: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = LanguageProviderState;
type ContainerActions = AppActions;

// eslint-disable-next-line no-undef
export { RootState, ContainerState, ContainerActions };
