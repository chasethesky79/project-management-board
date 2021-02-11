import styled from 'styled-components';

export const TicketWrapper = styled.div`
  background: lightGray;
  padding: 20px;
  width: 80%;
  margin: 10px 10px 10px 10px;
  text-align: center;
  border-radius: 20px;
  &:not(:last-child) {
      margin-bottom: 5%;
  }
`

export const Title = styled.h3`
   width: 100%;
   margin: 0px;
`

export const Body = styled.p`
  width: 100%
`
export const BoardWrapper = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 margin: 5%;
 width: 80%;
 @media (max-width: 768px) {
    flex-direction: column;
 }
`

export const LaneWrapper = styled.div`
max-width: 300px;
height: 100%;
background: darkGray;
margin: 10px 10px 10px 10px;
`

export const Alert = styled.div`
text-align: center
`