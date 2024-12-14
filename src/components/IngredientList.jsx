const IngredientList = ({ ingredients }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.name}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button>+</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IngredientList
