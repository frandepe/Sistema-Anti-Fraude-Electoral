import { FormState } from './';

type FormActionType = { type: '[FORM] - PaginationForm'; payload: any };

export const formReducer = (
  state: FormState,
  action: FormActionType,
): FormState => {
  switch (action.type) {
    case '[FORM] - PaginationForm':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
