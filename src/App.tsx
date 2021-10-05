import { useState } from 'react';

import { Container, Area, Header } from './App.styles'

import { Item } from './types/item'

import { ListItem } from './components/ListItem'

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Aprender Node',  done: false },
    { id: 2, name: 'Aprender React', done: true },
  ])

  return (
      <Container>
        <Area>
          <Header>Lista de Tarefas</Header>

          {/* {Área para adicionar novos item à lista} */}

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </Area>
      </Container>
  );
}