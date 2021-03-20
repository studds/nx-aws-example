import { hash } from 'bcrypt';
import { libAsLayer } from '@nx-aws-example/lib-as-layer';

export const handler = async () => {
  const saltRounds = 10;
  const myPlaintextPassword = 's0//P4$$w0rD';
  const hashedPassword = await hash(myPlaintextPassword, saltRounds);
  return {
    statusCode: 200,
    body: JSON.stringify({
      payload: libAsLayer(),
      ok: hashedPassword === 'fromDB',
    }),
  };
};
