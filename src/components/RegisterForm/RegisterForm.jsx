import { Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { FormEl, FormLabel, FormField, RegisterFormBtn } from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            onSubmit={values => {
                dispatch(register(values));
            }}
        >
            <FormEl>
                <FormLabel>
                    Name <FormField name="name" type="text" placeholder="Enter your name" />
                </FormLabel>
                <ErrorMessage name="name" component="span" />
                <FormLabel>
                    Email <FormField name="email" type="email" placeholder="Enter your email" />
                </FormLabel>
                <ErrorMessage name="email" component="email" />
                <FormLabel>
                    Password <FormField name="password" type="password" placeholder="Enter your password" />
                </FormLabel>
                <ErrorMessage name="password" component="span" />
                <RegisterFormBtn type="submit">Register</RegisterFormBtn>
            </FormEl>
        </Formik>
    )
};