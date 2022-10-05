import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Title = styled.Text<{ error: any }>`
  margin-bottom: 4px;
  color: ${({ theme, error }) =>
    error ? theme.colors.danger_2 : theme.colors.gray1};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
