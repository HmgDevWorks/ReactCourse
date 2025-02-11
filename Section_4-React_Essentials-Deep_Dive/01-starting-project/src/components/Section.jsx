export default function Section({ title, children, ...props }) {
  return (
    // <section id={props.id}>
    <section {...props}>
      <h2>Examples</h2>
      {children}
    </section>
  );
}
