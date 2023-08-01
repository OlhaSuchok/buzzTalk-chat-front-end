import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin-bottom: 24px;
`;

export const LableText = styled.label`
  font-family: cursive;
  font-size: 18px;
  color: gray;
  text-decoration: none;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 350px;
  color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${(props) => props.theme.colors.input};

  padding: 6px 10px;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::placeholder {
    font-family: cursive;
    font-size: 18px;
    color: gray;
  }

  &[value] {
    font-family: cursive;
    font-size: 24px;
    color: gray;
  }
`;

export const InputRuleText = styled.p`
  font-family: cursive;
  font-size: 14px;
  text-decoration: none;
  color: black;

  /* &.error {
    color: red;
  } */
`;

export const InputErrorText = styled.p`
  font-family: cursive;
  font-size: 14px;
  text-decoration: none;
  color: red;
`;
