import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DatailWrap = styled.div`
  margin-top: 20px;
  padding: 15px;
`;

export const DetailBtn = styled(NavLink)`
  background: #5e5df0;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  border: 0;
`;

export const FilmCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
`;

export const FilmInfo = styled.div`
displayL flex;
padding: 15px;
`;
export const FilmTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;
export const Info = styled.h1`
  display: flex;
  list-style: none;
  gap: 15px;
`;
export const InfoLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3d3d3d;
  background: #f33f3f;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:focus {
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
  &:hover {
  }
`;