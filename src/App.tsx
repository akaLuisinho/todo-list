import { useState } from 'react';
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'
import { Container, Area, Header } from './App.styles'

export default function App() {
  const [list, setList] = useState<Item[]>([])

  function hadleAddTask(taskName: string) {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  function handleSetDone(id: number, done: boolean) {
    let newList = [...list]

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
      <Container>
        <Area>
          <Header>Lista de Tarefas</Header>

          <AddArea onEnter={hadleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} setDone={handleSetDone}/>
          ))}
        </Area>
      </Container>
  );
}