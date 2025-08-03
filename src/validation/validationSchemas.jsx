import * as Yup from 'yup';

export const personalDetailsSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('נדרש למלא שם מלא')
    .min(2, 'שם מלא קצר מדי'),
  email: Yup.string()
    .email('אימייל לא תקין')
    .required('נדרש למלא אימייל'),
  phone: Yup.string()
    .matches(/^0\d{1,2}-?\d{7}$/, 'טלפון לא תקין (למשל 0501234567)')
    .required('נדרש למלא טלפון'),
  address: Yup.string()
    .required('נדרש למלא כתובת'),
});

export const experienceSchema = Yup.object().shape({
  role: Yup.string()
    .required('נדרש למלא תפקיד'),
  company: Yup.string()
    .required('נדרש למלא שם חברה'),
  duration: Yup.string()
    .required('נדרש למלא משך זמן'),
  description: Yup.string()
    .required('נדרש למלא תיאור תפקיד'),
});

export const educationSchema = Yup.object().shape({
  degree: Yup.string()
    .required('נדרש למלא תואר / קורס'),
  institution: Yup.string()
    .required('נדרש למלא מוסד לימודים'),
  duration: Yup.string()
    .required('נדרש למלא משך זמן'),
});
