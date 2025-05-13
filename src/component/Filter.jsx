import React from "react";

export default function Filter({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={styles.container}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            ...styles.button,
            backgroundColor: filter === f ? "#3b82f6" : "#e5e7eb",
            color: filter === f ? "#fff" : "#000",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
