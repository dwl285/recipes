import Slider from "react-input-slider";
import React, { useState, useEffect } from "react";
import theme from "../styles/theme";

const RecipeFilters = (props) => {
  return (
    <div className="filters">
      {console.log(props.max_cook_time)}
      <div className="slider">
        <p>{"Max cooking time: " + props.cook_time + " mins"}</p>
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
          x={props.cook_time}
          onChange={props.handleSlider}
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
