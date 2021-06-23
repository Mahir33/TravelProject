import * as yup from "yup";

const schema = yup.object().shape({
    location: yup.string().required("*Please give a location"),
    image: yup.mixed(),
    description: yup.string().required("*Please type a decription"),
})
export {
    schema
};