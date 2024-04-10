import React from "react";
import Chip from "@mui/material/Chip";

// eslint-disable-next-line react/prop-types
export const Tags = ({ items }) => (
  <div className="chips">
    {/* eslint-disable-next-line react/prop-types */}
    {items.map((item) => (
      <Chip label={item} variant="outlined" className="Chip" key={item} />
    ))}
  </div>
);
