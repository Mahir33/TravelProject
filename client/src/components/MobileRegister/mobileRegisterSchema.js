import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("*Username is required!").matches(/^[a-zA-Z0-9]+$/i , '*Username should not contain special characters!'),
    email: yup.string().email("*E-mail must be valid").required("*E-mail is required!"),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "*Password should contain Uppercase and lowercase letter + numbers + special charachters"),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required(),})
export {schema};