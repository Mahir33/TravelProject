import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string(),
    website: yup.string().url(),
    bio: yup.string(),
    oldPassword: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "*Password should contain Uppercase and lowercase letter + numbers + special charachters"),
    newPassword: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "*Password should contain Uppercase and lowercase letter + numbers + special charachters"),
    confirm_new_password: yup.string().oneOf([yup.ref("newPassword"), null]),
    })
export {schema};