import {Alert, Button, ButtonGroup, TextField} from "@mui/material"
import {toDoSelector} from "../redux/toDoSelector"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import {
  ADD_ITEM,
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_CURRENT,
  NEW_ITEM,
  SET_LENGTH_ERROR,
  SWITCH_STATUS
} from "../redux/actions"
import '../styles/index.css'
import {ReactElement} from "react"

const App = (): ReactElement => {

  const dispatch = useAppDispatch()
  const {toDoItems, newItem, lengthError, totalCompleted, totalCurrent} = useAppSelector(toDoSelector)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="count-wrapper">
          <span>Current:{totalCurrent.length}</span>
          <br/>
          <span>Completed:{totalCompleted.length}</span>

        </div>
        <div className="input-wrapper">
          <TextField
            id="outlined-basic"
            label="Add item"
            variant="outlined"
            size="small"
            onChange={e => dispatch(NEW_ITEM(e.target.value))}
            value={newItem}
          />
          <Button
            className="input-wrapper-button"
            variant="contained"
            onClick={() => dispatch(ADD_ITEM(newItem))}
          >ADD ITEM
          </Button>
        </div>
        {lengthError ?
          <Alert className="alert" severity="error" onClose={() => dispatch(SET_LENGTH_ERROR())}>
                        Very long name
          </Alert> : null}
        <div className="btn-group">
          <ButtonGroup variant="contained" size="small" aria-label="Basic button group">
            <Button onClick={() => dispatch(FILTER_ALL())}>ALL</Button>
            <Button onClick={() => dispatch(FILTER_COMPLETED())}>COMPLETED</Button>
            <Button onClick={() => dispatch(FILTER_CURRENT())}>CURRENT</Button>
          </ButtonGroup>
        </div>
        {toDoItems?.map(item => 
          <ul key={item.id}>
            <li className="items-list">
              <div style={{textDecoration: item.completed ? 'line-through' : '', cursor: "pointer"}}
                onClick={() => dispatch(SWITCH_STATUS({id: item.id, completed: item.completed}))}
              >{item.itemName}</div>
            </li>
          </ul>
                    
        )}
      </div>
    </div>
  )
}

export default App
