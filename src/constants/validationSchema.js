import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("نام الزامی است").min(3, "حداقل ۳ کاراکتر"),
  lastName: yup
    .string()
    .required("نام خانوادگی الزامی است")
    .min(3, "حداقل ۳ کاراکتر"),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  phone: yup.string().required("شماره تلفن الزامی است"),
});
