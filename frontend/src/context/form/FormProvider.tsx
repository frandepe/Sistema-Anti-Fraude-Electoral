import { FC, useReducer, ReactNode } from 'react';
import { FormContext, formReducer } from './';

export interface FormState {
  count: number;
}

interface Props {
  children?: ReactNode | undefined;
}

const FORM_INITIAL_STATE: FormState = {
  count: 0,
};

export const FormProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);

  const paginationForm = (newCount: number) => {
    dispatch({ type: '[FORM] - PaginationForm', payload: newCount });
  };

  return (
    <FormContext.Provider value={{ count: state.count, paginationForm }}>
      {children}
    </FormContext.Provider>
  );
};
