import { createContext } from 'react';

interface ContextProps {
  paginationForm: (newCount: number) => void;
  count: number;
}

export const FormContext = createContext<ContextProps>({
  paginationForm: () => {},
  count: 0,
});
