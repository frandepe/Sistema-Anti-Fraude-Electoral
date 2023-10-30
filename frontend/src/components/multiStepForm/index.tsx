import React, { useContext, useState } from 'react';
import {
  FormikConfig,
  FormikValues,
  Formik,
  FormikHelpers,
  Form,
} from 'formik';
import { FormContext } from '#/context/form';

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {
  const { paginationForm, count } = useContext(FormContext);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[count];
  const totalSteps = steps.length;
  const isLastStep = count === totalSteps - 2;
  const refreshForm = count === totalSteps - 1;
  const next = (values: FormikValues) => {
    setSnapshot(values);
    paginationForm(count + 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      paginationForm(count + 1);
      return onSubmit(values, actions);
    } else if (refreshForm) {
      paginationForm(0);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => <Form>{step}</Form>}
      </Formik>
    </div>
  );
};

export default MultiStepForm;

export const FormStep = ({ children }: any) => children;
