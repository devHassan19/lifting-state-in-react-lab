const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {stack.map((currentStack, index) => (
        <li
          className="li"
          key={currentStack.name}
          style={{ backgroundColor: currentStack.color }}
        >
          {currentStack.name}
          <button id={index} onClick={onRemove}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
