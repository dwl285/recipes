import Slider from "react-input-slider";
import React, { useState, useEffect } from "react";
import theme from "../styles/theme";
import MultiSelect from "react-multi-select-component";

const RecipeFilters = (props) => {
  const overrideStrings = {
    selectSomeItems: "Select tags...",
    allItemsAreSelected: "Select recipe tags to filter by",
    selectAll: "All tags",
    search: "Search tags",
  };

  return (
    <div className="filters">
      <input
        className="search-input"
        type="text"
        placeholder="Search recipes by title"
        value={props.searchTerm}
        onChange={props.handleSearchChange}
      />
      <div className="slider">
        <p>0</p>
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
        <p>{`${props.cook_time} mins`}</p>
      </div>
      <div className="tag_picker">
        <MultiSelect
          className="multi-select"
          options={props.tag_options}
          value={props.tags_selected}
          onChange={props.setSelectedTags}
          labelledBy={"Select tags"}
          overrideStrings={overrideStrings}
          hasSelectAll={false}
          disableSearch={true}
        />
      </div>
      <style jsx>{`
        .filters {
          display: flex;
          flex-flow: column nowrap;
          margin: 16px;
          align-items: stretch;
        }
        input {
          display: flex;
          width: 90%;
          align-self: center;
          border: 2px solid ${theme.colors.brandSecondary};
          border-radius: 4px;
          padding: 8px;
          color: ${theme.colors.brandSecondary};
          outline: none;
        }
        .slider {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          margin: 16px;
        }
        .slider * {
          margin: 0px 16px;
        }
      `}</style>
    </div>
  );
};
export default RecipeFilters;
