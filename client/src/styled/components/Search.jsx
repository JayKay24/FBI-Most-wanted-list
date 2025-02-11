import styled from 'styled-components';

const StyledSearch = styled.div`
  background-color: white;
  border: 1px solid black;
  margin: 5px 5px 10px 5px;
  padding: 10px;
  text-align: center;

  > * {
    display: inline-block;
    height: 25px;
  }

  > button {
    background-color: azure;
    border: 1px solid black;
    margin-left: 5px;
  }
`;

export default StyledSearch;
