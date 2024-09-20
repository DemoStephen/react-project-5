export default function Keyboard() {
  return (
    <section className="buttons">
      <button onClick={() => {}}>7</button>
      <button onClick={() => {}}>8</button>
      <button onClick={() => {}}>9</button>
      <button onClick={() => {}} className="deleteAndReset">
        del
      </button>

      <button onClick={() => {}}>4</button>
      <button onClick={() => {}}>5</button>
      <button onClick={() => {}}>6</button>
      <button onClick={() => {}}>+</button>

      <button onClick={() => {}}>1</button>
      <button onClick={() => {}}>2</button>
      <button onClick={() => {}}>3</button>
      <button onClick={() => {}}>-</button>

      <button>.</button>
      <button onClick={() => {}}>0</button>
      <button onClick={() => {}}>/</button>
      <button onClick={() => {}}>x</button>

      <button onClick={() => {}} className="deleteAndReset span">
        reset
      </button>
      <button onClick={() => {}} className="equals span">
        =
      </button>
    </section>
  );
}
