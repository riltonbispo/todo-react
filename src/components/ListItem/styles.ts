import styled from "styled-components";

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=>(`
  display: flex;
  background-color: #20212c;
  padding: 8px;
  border-radius: 4px;
  margin-block: 10px;
  align-items: center;

  input {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  label {
    color: gray;
    text-decoration: ${done ? 'line-through' : 'initial'} 
  }

  span {
    color: ${done? 'gray' : 'white'};
    text-decoration: ${done ? 'line-through' : 'initial'} 
  }
`))