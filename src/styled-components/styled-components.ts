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
export const LanesContainer = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 margin: auto;
 width: 80%;
 border: 1px solid;
`

export const LaneWrapper = styled.div`
max-width: 300px;
height: 100%;
background: darkGray;
margin: 10px 10px 10px 10px;
`