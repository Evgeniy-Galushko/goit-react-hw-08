import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const сontacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactListUl}>
      {сontacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
