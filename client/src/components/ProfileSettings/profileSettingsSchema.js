import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email(),
    location: yup.string(),
    picture: yup.mixed(),
    website: yup.string().url(),
    bio: yup.string(),
    oldPassword: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "*Password should contain Uppercase and lowercase letter + numbers + special characters"),
    newPassword: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "*Password should contain Uppercase and lowercase letter + numbers + special characters"),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], 'Passwords must match'),
})
export {
    schema
};