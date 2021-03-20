import { generate } from 'name-creator';

export function libAsLayer(): string {
  const name = generate().dashed;
  return `lib-as-layer = ${name}`;
}
