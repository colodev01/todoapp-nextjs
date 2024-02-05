import Image from "next/image";
import styles from "../styles/todo.module.css";

export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;

  // Aplicar estilo de tachado si el todo está completado
  const textStyles = todo.completed ? { textDecoration: "line-through red 2.5px" } : {};

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="grey"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
