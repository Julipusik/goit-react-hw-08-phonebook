import { ContactForm } from "components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectLoading } from "redux/selectors";
import { BeatLoader } from "react-spinners";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { LoaderStyled } from "./ContactPage.styled";

export const ContactsPage = () => {
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <LoaderStyled>{isLoading && !error && <BeatLoader color="#4F2EE8" />}</LoaderStyled>
            <Filter />
            <ContactList />
        </>
    )
};