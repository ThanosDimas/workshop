import * as React from "react";
import Burger from "./ChildComponents/Burger";
import IngredientsPicker from "./ChildComponents/IngredientsPicker";
import { ingredientsList } from "./../ApiClient/ApiClient";

interface IBurgerBuilderProps {}

interface IBurgerBuilderState {
  ingredientsList: any;
  ingredientsChoosed: any;
}

export default class BurgerBuilder extends React.Component<
  IBurgerBuilderProps,
  IBurgerBuilderState
> {
  constructor(props) {
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

  plusButton = ingredient => {
    const ingredientsChoosed = [ingredient, ...this.state.ingredientsChoosed];
    this.setState({
      ingredientsChoosed: ingredientsChoosed
    });
  };

  minusButton = index => {
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
