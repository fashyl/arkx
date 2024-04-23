import { FaEdit, FaTrash } from "react-icons/fa";
const Contact = ({ name, phone, onEdit, onDelete }) => {
  return (
    <div className="contact">
      <div className="name">{name}</div>
      <div className="phone">{phone}</div>
      <div className="actions">
        <button onClick={onEdit}>
          <FaEdit className="icon" />
        </button>
        <button onClick={onDelete}>
          <FaTrash className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
