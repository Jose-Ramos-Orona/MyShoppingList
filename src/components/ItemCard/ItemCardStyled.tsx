import styled from "styled-components";

const ItemCardStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  overflow-wrap: break-word;

  .item {
    margin-left: 0;
    padding-left: 0;
  }

  .delete {
    font-size: 0.6rem;
    margin: 0;
    padding: 0.4rem;
  }
`;
export default ItemCardStyled;
