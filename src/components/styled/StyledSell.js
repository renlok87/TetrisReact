import styled from 'styled-components';


export const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #3333333d;
  background: rgba(${props => props.color}, 0.8);
  // border: ${props => (props.type === 0 ? '0 solid' : '4px solid')};
  // border-bottom-color: rgba(${props => props.color}, 0.3);
  // border-right-color: rgba(${props => props.color}, 0.3);
  // border-top-color: rgba(${props => props.color}, 0.3);
  // border-left-color: rgba(${props => props.color}, 0.3);
`;
