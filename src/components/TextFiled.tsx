import React, { useRef, FC } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (name: string) => string;
  obj?: {
    f1: string;
  };
  person: Person;
}

export const TextField: FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <input ref={inputRef} />;
};
