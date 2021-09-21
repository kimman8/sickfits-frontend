import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;
export default function SignOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop da form from submitting
    const res = await signout();
    console.log({ res });
  }
  return (
    <button type="button" onClick={handleSubmit}>
      Sign Out
    </button>
  );
}
