import styled from 'styled-components';

export const TicketWrapper = styled.div`
  background: darkGray;
  padding: 20px;
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