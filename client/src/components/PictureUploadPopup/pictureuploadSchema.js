import * as yup from "yup";

const pictureUploadSchema = yup.object().shape({
    location: yup.string().required("*Please give a location"),
    picture: yup.mixed(),
    description: yup.string().required("*Please type a decription"),
})
export {
    pictureUploadSchema
};