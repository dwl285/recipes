import Slider from "react-input-slider";
import React, { useState, useEffect } from "react";
import theme from "../styles/theme";

const RecipeFilters = (props) => {
  const [state, setState] = useState({ x: props.max_cook_time });

  useEffect(() => {
    props.handleSlider(state);
  }, [state]); // run whenever beerCount is changed

  return (
    <div className="filters">
      <div className="slider">
        <p>{"Max cooking time: " + state.x + " mins"}</p>
        <Slider
          styles={{
            track: {
              backgroundColor: theme.colors.brandPrimary,
            },
            active: {
              backgroundColor: theme.colors.brandPrimary,
            },
            thumb: {
              width: 18,
              height: 18,
              opacity: 0.8,
            },
          }}
          axis="x"
          xstep={5}
          xmin={0}
          xmax={props.max_cook_time}
          x={state.x}
          onChange={({ x }) => {
            setState((state) => ({ x }));
          }}
        />
      </div>
      <style jsx>{`
        .filters {
          display: flex;
          justify-content: space-around;
          margin: 16px;
        }
      `}</style>
    </div>
  );
};
export default RecipeFilters;
