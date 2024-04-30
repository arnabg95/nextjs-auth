import * as actions from "../actions"

export default function Home() {
  return (
    <form action={actions.signIn}>
      <button type="submit">Signup</button>
    </form>
  );
}
