import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '../layout';

export default component$(() => {
  const signal = useServerTimeLoader();

  return (
    <section class="section bright">
      <h1>Joke</h1>
      <p>Time: {signal.value.date}</p>
      <p>Message: {signal.value.content.message}</p>
    </section>
  )
})