import styled from 'styled-components';
import pepe from '../../img/pepe.jpg';


export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${pepe}) #000;
  background-size: cover;
  overflow: hidden;
`;


export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  
  
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
