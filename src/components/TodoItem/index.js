import './index.css'

const TodoItem = props => {
  const {TodosLists, DeleteBtn} = props
  const {id, title} = TodosLists

  const onDelete = () => {
    DeleteBtn(id)
  }

  return (
    <li className="each-item">
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
