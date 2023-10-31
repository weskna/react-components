import React, { useEffect, useState } from "react";

const Chip = ({
  chipId,
  chipType,
  chipValue,
  removable = false,
  onRemove = () => {},
}) => {
  return (
    <div
      key={chipId}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 0.5rem",
        fontSize: "0.65rem",
        borderRadius: "0.5rem",
        color: "#fff",
        backgroundColor:
          chipType === "status"
            ? "#EFA00B"
            : chipType === "createdAt"
            ? "#D65108"
            : chipType === "search"
            ? "#0075C4"
            : "#591F0A",
      }}
    >
      <span>{chipValue}</span>
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: "0 0 0 0.5rem",
          }}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Chip;
