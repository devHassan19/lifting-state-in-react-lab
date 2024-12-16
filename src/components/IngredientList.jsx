const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            className="li"
            key={ingredient.name}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button className="button" id={index} onClick={onAdd}>
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IngredientList
