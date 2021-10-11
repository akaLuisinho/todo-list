import { Container } from './styles'
import { Item } from '../../types/item'

type Props = {
    item: Item,
    setDone: (id: number, done: boolean) => void
}

export function ListItem({ item, setDone }: Props) {
    return (
        <div>
            <Container done={item.done}>
               <input 
               type="checkbox" 
               checked={item.done} 
                onChange={e => setDone(item.id, e.target.checked )}
               />
               <label>{item.name}</label>
            </Container>
        </div>
    )
}