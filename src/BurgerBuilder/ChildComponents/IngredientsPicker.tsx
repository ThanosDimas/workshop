import * as React from "react";

interface IIngredientsPickerProps {
  ingredientsList: any;
  plusButton: any;
}

interface IIngredientsPickerState {}

export default class IngredientPicker extends React.Component<
  IIngredientsPickerProps,
  IIngredientsPickerState
> {
  render() {
    const { ingredientsList, plusButton } = this.props;

    return (
      <>
        {ingredientsList
          ? ingredientsList.map(ingredient => {
              return (
                <div key={ingredient.id} className="align-items-center row">
                  <button
                    className="btn btn-outline-info col-1"
                    onClick={() => plusButton(ingredient)}
                  >
                    +
                  </button>
                  <p className="mb-2 col">{ingredient.name}</p>
                </div>
              );
            })
          : "loading..."}
      </>
    );
  }
}
