const BurgerStack = ({ stack }) => {
  return (
    <ul>
      {stack.map((currentStack) => (
        <li
          key={currentStack.name}
          style={{ backgroundColor: currentStack.color }}
        >
          {currentStack.name}
          <button>X</button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
