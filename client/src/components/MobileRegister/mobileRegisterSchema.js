import * as yup from "yup";

const schema = yup.object().shape({
    userName: yup.string().required("*Username is required!").matches(/^[a-zA-Z0-9]+$/i , '*Username should not contain special characters!'),
    email: yup.string().email("*E-mail must be valid").required("*E-mail is required!"),
    password: yup.string().min(8).required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required(),})
export {schema};