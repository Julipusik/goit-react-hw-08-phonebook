import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    function filteredContacts() {
        if (!filter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));

    };

    return (
        <div>
            {filteredContacts().map(contact => {
                return <Contact
                    key={contact.id}
                    contact={contact} />
            }
            )}
        </div>
    );
};