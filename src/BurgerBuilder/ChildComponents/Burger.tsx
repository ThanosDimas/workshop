import * as React from "react";
import { IIngredientsList } from "../../Interfaces/IIngredientsList";

interface IBurgerProps {
  ingredientsChoosed: IIngredientsList[];
  minusButton(index: number): void;
}

interface IBurgerState {}

export default class Burger extends React.Component<
  IBurgerProps,
  IBurgerState
> {
  render() {
    const { ingredientsChoosed, minusButton } = this.props;

    return (
      <>
        <img
          src="img/bun_top.png"
          alt="bun_top"
          style={{ marginBottom: "-30px", position: "relative", zIndex: 30 }}
        />
        {ingredientsChoosed &&
          ingredientsChoosed.map((ingredient, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-10">
                  <img
                    className="float-right"
                    src={"img/" + ingredient.src}
                    alt={ingredient.name}
                    style={{
                      width: "400px",
                      height: "120px",
                      marginBottom: "-70px",
                      position: "relative",
                      zIndex: 0 - index
                    }}
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => minusButton(index)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        <img
          src="img/bun_bottom.png"
          alt="bun_bottom"
          style={{ position: "relative", zIndex: -100 }}
        />
      </>
    );
  }
}
