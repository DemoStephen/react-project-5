export default function Screen({ present, past }) {
  return (
    <section>
      <section className="outputScreen d-flex">
        <p className="previousDisplay">{past}</p>
        <p className="newValue">{present}</p>
      </section>
    </section>
  );
}
