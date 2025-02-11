import styled from 'styled-components';

const StyledPaginator = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px 5px 5px 5px;;
  text-align: center;

  > button {
    background-color: azure;
    border: 1px solid black;
    display: inline-block;
    height: 50px;
    margin-left: 5px;
    padding: 5px;
    width: 50px;

    &:hover {
      background-color: cyan;
      cursor: pointer;
    }
  }
`;

export default StyledPaginator;
