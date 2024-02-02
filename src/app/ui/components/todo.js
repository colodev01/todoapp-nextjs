import Image from "next/image";
import styles from "../styles/todo.module.css";

export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;

  // Aplicar estilo de tachado si el todo está completado
  const textStyles = todo.completed ? { textDecoration: "line-through" } : {};

  return (
    <div className={styles.toDoRow} key={todo.id}>
      <input
        className={styles.toDoInput}
        autoComplete="off"
        name="name"
        type="text"
        value={todo.name}
        onChange={(e) => onChange(e, todo.id)}
        style={textStyles}
      ></input>
      <input
        className={styles.toDoCheckbox}
        name="completed"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onChange(e, todo.id)}
      ></input>
      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
        <Image
          src="/material-symbols_delete-outline-sharp.svg"
          width="24"
          height="24"
          alt="delete.svg"
        />
      </button>
    </div>
  );
}
