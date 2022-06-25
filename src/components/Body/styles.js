import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

Container.Card = styled.div`
  width: 500px;
  height: 350px;
  border: 1px solid #f806cc;
  box-shadow: -1px 3px 23px 9px rgb(248, 6, 204, 0.5);
  text-align: center;
  font-size: 50px;
  padding-top: 130px;
  font-weight: bold;
  background-color: #df0cb8;
  color: white;
  margin: 30px;
  border-radius: 15px;
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.97);
  }
`;
