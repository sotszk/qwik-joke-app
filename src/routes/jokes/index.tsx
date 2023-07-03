import { component$, useStore, $ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../layout";
import { TextInput } from "~/components/joke/text-input";

type JokesForm = {
  username: string;
};

export const JokesForm = component$<{ store: JokesForm }>(({ store }) => {
  const handleChangeUsername = $((value: string) => {
    store.username = value;
  });

  return (
    <form class="section bright">
      <fieldset>
        <div>
          <TextInput
            name="username"
            label="Username"
            value={store.username}
            onChange={handleChangeUsername}
          />
        </div>
      </fieldset>
    </form>
  );
});

export default component$(() => {
  const signal = useServerTimeLoader();
  const jokesFormStore = useStore({
    username: "名無しさん",
  });

  return (
    <section class="section bright">
      <div class="container">
        <h1>Joke</h1>
        <p>Time: {signal.value.date}</p>
        <p>Message: {signal.value.content.message}</p>
      </div>

      <hr />

      <div class="container">
        <div>
          <p>Username: {jokesFormStore.username}</p>
        </div>

        <div>
          <JokesForm store={jokesFormStore} />
        </div>
      </div>
    </section>
  );
});
