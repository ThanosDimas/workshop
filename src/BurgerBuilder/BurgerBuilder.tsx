import * as React from "react";
import Burger from "./ChildComponents/Burger";
import IngredientsPicker from "./ChildComponents/IngredientsPicker";
import { ingredientsList } from "../ApiClient/ApiClient";
import { IIngredientsList } from "../Interfaces/IIngredientsList";

interface IBurgerBuilderProps {}

interface IBurgerBuilderState {
  ingredientsList: IIngredientsList[] | null;
  ingredientsChoosed: IIngredientsList[];
}

export default class BurgerBuilder extends React.Component<
  IBurgerBuilderProps,
  IBurgerBuilderState
> {
  constructor(props: IBurgerBuilderProps) {
    super(props);
    this.state = {
      ingredientsList: null,
      ingredientsChoosed: []
    };
  }

  UNSAFE_componentWillMount() {
    this.getIngredients();
  }

  getIngredients = () => {
    ingredientsList().then(result =>
      this.setState({
        ingredientsList: result
      })
    );
  };

  plusButton = (ingredient: IIngredientsList) => {
    const ingredientsChoosed = [ingredient, ...this.state.ingredientsChoosed];
    this.setState({
      ingredientsChoosed: ingredientsChoosed
    });
  };

  minusButton = (index: number) => {
    const ingredients = this.state.ingredientsChoosed.slice();
    ingredients.splice(index, 1);
    this.setState({
      ingredientsChoosed: ingredients
    });
  };

  render() {
    const { ingredientsList, ingredientsChoosed } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-6 text-center">
            <Burger
              ingredientsChoosed={ingredientsChoosed}
              minusButton={this.minusButton}
            />
          </div>
          <div className="col-6">
            <IngredientsPicker
              ingredientsList={ingredientsList}
              plusButton={this.plusButton}
            />
          </div>
        </div>
      </>
    );
  }
}
