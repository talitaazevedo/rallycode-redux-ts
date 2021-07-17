import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: Boolean;
  error: string | null;
  data: string[];
}

//some kind like  a object

const reducer = (
  state: RepositoriesState,
  action: Action,
): RepositoriesState => {
  // if (action.type === 'search_repositories_success') {
  //   //100% certainty that 'action' satisfies the
  //   // SearchRepositoriesSuccessAction interface
  //   action.payload;
  // }

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain tha action is SearchRepositoriesSuccessAction
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
