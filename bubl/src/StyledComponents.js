import styled from 'styled-components';

export const NavBar = styled.nav`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
`;

export const NavLinkStyled = styled.link`
  color: #fff;
  text-decoration: none;
`;

export const Form = styled.form`
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Label = styled.label`
  text-align: left;
  margin: 5px;
`;

export const Input = styled.input`
  border: 1px solid dodgerblue;
  border-radius: 3px;
  margin: 3px;
  padding: 10px;
  width: 275px;
  font-size: 14px;
`;

export const LoginButton = styled.button`
  background-color: #5af3fd;
  border: 2px solid #5af3fd;
  border-radius: 3px;
  margin: 3px;
  padding: 10px;
  font-size: 14px;
  color: #2e008f;
  width: 275px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: dodgerblue;
  }
`;

export const Button = styled.button`
  background-color: dodgerblue;
  border: 1px solid dodgerblue;
  border-radius: 3px;
  margin: 3px;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  width: 200px;
`;
