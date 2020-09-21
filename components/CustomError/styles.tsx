import styled from "styled-components"

export const Container = styled.div`
  height: calc(100vh - 11rem);
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--accent-text);
  font-weight: 400;
`

export const Code = styled.h1`
  border-right: 1px solid var(--light-text);
  margin-right: 20px;
  padding-right: 20px;
`

export const Message = styled.div`
  color: var(--light-text);
`
