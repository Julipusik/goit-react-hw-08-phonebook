import { useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import { ContactItem, EditBtn, DeleteBtn } from "./Contact.styled"
// import { openModal } from "redux/modalSlice";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <ContactItem>
            <p>
                {contact.name}: {contact.number}
            </p>
            {/* <EditBtn 
                onClick={e => {
                    dispatch(openModal({contact}))
                }}
            >Edit</EditBtn> */}
            <DeleteBtn
                onClick={evt => dispatch(removeContact(evt.target.id))}
                id={contact.id}
            >
                Delete
            </DeleteBtn>
        </ContactItem>
    )
}