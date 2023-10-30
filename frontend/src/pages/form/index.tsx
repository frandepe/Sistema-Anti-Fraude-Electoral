import MultiStepForm, { FormStep } from '../../components/multiStepForm';
import UploadCertificate from '#/pages/upload-certificate/uploadCertificate';
import VerifyCertificatePage from '#/pages/verify-certificate/verifyCertificate';
import { SendSuccess } from '#/pages/send-success';

export const Form = () => {
  return (
    <div>
      <MultiStepForm
        initialValues={
          {
            // valores iniciales
          }
        }
        onSubmit={async ({ data }, { resetForm }) => {
          try {
            // logica de respuesta
          } catch (err) {
            console.log('Error catch:', err);
          } finally {
            resetForm();
          }
        }}
      >
        <FormStep stepName="UploadImage">
          <UploadCertificate />
        </FormStep>
        <FormStep stepName="Verify">
          <VerifyCertificatePage />
        </FormStep>
        <FormStep stepName="Success">
          <SendSuccess />
        </FormStep>
      </MultiStepForm>
    </div>
  );
};
