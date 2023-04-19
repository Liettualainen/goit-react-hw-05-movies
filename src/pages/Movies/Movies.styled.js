import styled from '@emotion/styled';

export const MoviesInput = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const SearchButton = styled.button`
  background-color: #0095ff;
  height: 38.5px;
  width: 150px;
  margin-left: 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover,
&:focus {
  background-color: #07c;
}
&:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}
&:active {
  background-color: #0064bd;
  box-shadow: none;
}
}
`;

export const FormMovies = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
`;