import { hash} from 'bcrypt';

export const handler = async () => {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const hashedPassword = await hash(myPlaintextPassword, saltRounds);
  return {
    statusCode: 200,
    body: JSON.stringify({ payload: 'heavy', ok: hashedPassword === 'fromDB' }),
  };
};
