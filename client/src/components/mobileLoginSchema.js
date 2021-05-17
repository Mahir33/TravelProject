import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email("*E-mail must be valid").required("*E-mail is required!"),
    password: yup.string().min(8).required()
})
export {schema};