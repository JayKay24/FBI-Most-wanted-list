import styled from 'styled-components';

const StyledSearch = styled.div`
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin: 5px 5px 10px 5px;
  padding: 10px;

  .drop-down {
    margin-left: 10px;
    padding-top: 3px;

    > div {
      margin-left: 5px;
      padding-top: 3px;
    }
  }

  .params {
    text-align: center;
  }

  .params > * {
    display: inline-block;
    height: 25px;
  }

  .params > button { 
    background-color: azure;
    border: 1px solid black;
    margin-left: 5px;
  }

  > label {
    margin-left: 5px;
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;

    .drop-down {
      > select {
        display: inline;
      }
    }
  }
`;

export default StyledSearch;
