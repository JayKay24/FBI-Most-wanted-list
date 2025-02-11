import styled from 'styled-components';

const StyledPaginator = styled.div`
  padding: 10px;
  text-align: center;

  > button {
    border: 1px solid cyan;
    color: blue;
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
