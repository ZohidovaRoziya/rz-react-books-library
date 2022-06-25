import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  height: 480px;
  padding: 30px 20px;
  margin: 150px auto;
  text-align: center;
  background: #fff;
  border: 1px solid #ff06b7;
  box-shadow: -1px 3px 23px 9px rgb(248, 6, 204, 0.5);
  border-radius: 3px;

  .regstr {
    font-size: 22px;
    text-decoration: underline;
    color: #1f4690;
  }
`;

Container.Title = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 28px;
  color: #9a0680;
  margin-bottom: 44px;
  padding-top: 20px;
`;

Container.UserName = styled.input`
  border: 0;
  padding: 8px;
  border-bottom: 1px solid #9a0680;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: #ff06b7;
  outline: none;
  margin-bottom: 30px;
`;

Container.Password = styled.input`
  border: 0;
  padding: 8px;
  border-bottom: 1px solid #9a0680;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: #ff06b7;
  outline: none;
`;

Container.Btn = styled.div`
  background: #9a0680;
  border-radius: 5px;
  padding: 12px 38px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  margin: 20px 0;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;
