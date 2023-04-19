import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  text-decoration: none;
  color: #1f1f1f;
`;

export const MovieTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  padding: 20px 0 20px;
`;

export const MovieItem = styled.li`
 flex-basis: calc((100% - 20px) / 4);
  height: 100px;  
  padding: 10px;
     
 // width: 300px;
 
  padding: 15px;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  // display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  // padding-bottom: auto;
  // padding: .75rem;
  // padding: auto;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  // border-bottom-left-radius: 15px 255px;
  // border-bottom-right-radius: 225px 15px;
  // border-top-left-radius: 255px 15px;
  // border-top-right-radius: 15px 225px;
border: thick double #32a1ce;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
  transform: translate3d(0, 2px, 0);
}
&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-flow: wrap;  
  gap: 20px;
  justify-content: center;
     text-align: center;
     align-item: center;
  margin-left: auto;
  margin-right: auto;
}
`;