import styled from "styled-components";

export const Nav = styled.div`
  background-color: #9a0680;
  font-size: 24px;
  padding: 10px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

Container.Item = styled.div`
  text-align: center;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

Wrapper.Btn = styled.div`
  background-color: #f806cc;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  border: 1px solid #fff;
  padding: 15px 40px;
  border-radius: 8px;
  margin: 0 5px;
`;
