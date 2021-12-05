
export default function Results(myProps) {
  return (
    <section>
      <pre>{myProps.data ? JSON.stringify(myProps.data, undefined, 2) : null}</pre>
    </section>
  );
}
