import { ErrorMessage, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { FormLabel, LoginFormBtn, FormEl, FormField } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => {
                dispatch(logIn(values));
            }}
        >
            <FormEl>
                <FormLabel>
                    Email <FormField name="email" type="email" placeholder="Enter your email"/>
                </FormLabel>
                <ErrorMessage name="email" component="span" />
                <FormLabel>
                    Password <FormField name="password" type="password" placeholder="Enter your password"/>
                </FormLabel>
                <ErrorMessage name="password" component="span" />
                <LoginFormBtn type="submit">Log in</LoginFormBtn>
            </FormEl>
        </Formik>
    )
}