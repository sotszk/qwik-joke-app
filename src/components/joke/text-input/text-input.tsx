import { component$ } from "@builder.io/qwik";

export default component$<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
}>((props) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        name={props.name}
        value={props.value}
        onInput$={(_, el) => props.onChange(el.value)}
      />
    </label>
  );
});
