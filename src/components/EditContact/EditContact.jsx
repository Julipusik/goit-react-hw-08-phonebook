// import { ErrorMessage, Formik } from 'formik';
// import Modal from 'react-modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { editContact } from 'redux/contacts/operations';
// import { closeModal } from 'redux/modalSlice';
// import { selectModal, selectModalId, selectModalName, selectModalNumber } from 'redux/selectors';
// import CloseIcon from '@mui/icons-material/Close';
// import { FormEl, FormFieldStyled, FormSubmit, IconClose } from './EditContact.styled';

// Modal.setAppElement('#root');

// const modalStyles = {
//     content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }

// export const EditModal = () => {
//     const modalOpen = useSelector(selectModal);
//     const contactId = useSelector(selectModalId);
//     const contactName = useSelector(selectModalName);
//     const contactNumber = useSelector(selectModalNumber);
//     const dispatch = useDispatch();

//     const onSubmit = contact => {
//         dispatch(editContact({ contactId, contact }));
//     };

//     return (
//         <>
//             <Modal isOpen={modalOpen}
//                 onRequestClose={() => dispatch(closeModal())}
//                 style={modalStyles}
//                 contentLabel='Example modal'>
//                 <Formik
//                     initialValues={{
//                         name: contactName,
//                         number: contactNumber,
//                     }}
//                     onSubmit={(values, { resetForm }) => {
//                         const { name, number } = values;
//                         onSubmit({ name, number });
//                         resetForm();
//                         dispatch(closeModal());
                    
//                     }}
//                 >
//                     <FormEl>
//                         <label>
//                             Name <FormFieldStyled name="name" type="text"/>
//                         </label>
//                         <ErrorMessage name="name" component="span" />
//                         <label>
//                             Number <FormFieldStyled name="number" type="tel" />
//                         </label>
//                         <ErrorMessage name="number" component="span" />
//                         <FormSubmit type="submit">Edit contact</FormSubmit>
//                     </FormEl>
//                 </Formik>
//                 <IconClose
//                     aria-label="close"
//                     size="15"
//                     onClick={() => dispatch(closeModal())}
//                 >
//                     <CloseIcon/>
//                 </IconClose>
//             </Modal>
//         </>
//     )
// }