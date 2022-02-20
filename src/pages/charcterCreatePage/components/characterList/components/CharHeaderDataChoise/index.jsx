import styles from "./index.module.scss";

export const CharHeaderDataChoise = ({
  character,
  setCharacter,
  data,
  datField,
}) => {
  return (
    <div className={styles.charData}>
      <select
        onChange={(e) => {
          const value = { ...character };
          value[datField] = e.target.value;
          setCharacter(value);
        }}
        value={character[datField]}
      >
        {data.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
      <p>{`${datField} ${character[datField]}`}</p>
    </div>
  );
};
