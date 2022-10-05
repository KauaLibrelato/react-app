import React from "react";

import {
  Container,
  Title,
  Informations,
  IconContainerOne,
  IconContainer,
} from "./styles";

interface Props {
  title: string;
  onPress1?: () => void;
  onPress2?: () => void;
  children1?: React.ReactNode;
  children2?: React.ReactNode;
}

export function HeaderPrincipal({
  title,
  onPress1,
  onPress2,
  children1,
  children2,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Informations>
        <IconContainerOne onPress={onPress1}>{children1}</IconContainerOne>
        <Title>{title}</Title>
        <IconContainer onPress={onPress2}>{children2}</IconContainer>
      </Informations>
    </Container>
  );
}
