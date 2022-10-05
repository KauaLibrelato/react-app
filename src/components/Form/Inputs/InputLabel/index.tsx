import React from "react";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}

export function InputLabel({ title, error, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title error={error}>{title}</Title>
    </Container>
  );
}
