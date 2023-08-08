import * as yup from 'yup';

export const ideaValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
