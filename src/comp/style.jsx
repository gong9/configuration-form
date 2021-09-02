import styled from "@emotion/styled";
export const CssContaier = styled.div`
  color: red;
`;

// css in js 通信方式
export const CssDemo = styled.div`
  color: ${(props) => 
      props.color
  }};
`;
