import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({done}: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 10px;
    align-items: center;

    input { 
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label { 
        color: #CCCCCC;
        text-decoration: ${done ? 'line-through' : 'none'}
    }
`
))