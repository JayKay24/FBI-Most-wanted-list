import styled from 'styled-components';

const StyledPaginator = styled.div`
  border: 1px solid black;
  padding: 10px;
  text-align: center;

  > button {
    border: 1px solid azure;
    display: inline-block;
    height: 50px;
    margin-left: 5px;
    padding: 5px;
    width: 50px;

    &:hover {
      background-color: azure;
      cursor: pointer;
    }
  }
`;

export default StyledPaginator;
