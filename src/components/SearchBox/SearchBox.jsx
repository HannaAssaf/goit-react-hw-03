import css from "./SearchBox.module.css";

export default function SearchBox({ text, onChange }) {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.search}
          type="text"
          value={text}
          onChange={(ev) => onChange(ev.target.value)}
        />
      </label>
    </div>
  );
}
