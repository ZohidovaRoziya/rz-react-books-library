import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const BookCon = styled.div`
  width: 350px;
  max-width: 350px;
  height: 420px;
  margin: 20px 10px;
  text-align: center;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 18px 6px rgba(34, 60, 80, 0.19);
`;

BookCon.Img = styled.img`
  width: 350px;
  max-width: 350px;
  height: 300px;
  object-fit: cover;
`;

BookCon.Title = styled.h2`
  font-size: 22px;
  color: black;
  text-align: center;
  margin: 10px;
`;
BookCon.Btn = styled.div`
  padding: 10px 15px;
  background: black;
  color: white;
  font-weight: bold;
  margin: 0 auto;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;
