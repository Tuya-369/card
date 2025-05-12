import React from "react";

export default function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div style={styles.task}>
            <label style={styles.label}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    style={styles.checkbox}
                />
                <span
                    style={{
                        ...styles.text,
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "#9ca3af" : "#000",
                    }}
                >
                    {task.text}
                </span>
            </label>
            <button onClick={() => deleteTask(task.id)} style={styles.delete}>
                delete
            </button>
        </div>
    );
}

const styles = {
    task: {
        backgroundColor: "#f3f4f6",
        padding: "10px",
        borderRadius: "8px",
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    checkbox: {
        width: "16px",
        height: "16px",
        cursor: "pointer",
    },
    text: {
        fontSize: "16px",
    },
    delete: {
        backgroundColor: "#e5e7eb", // Tailwind: gray-200
        color: "#000",
        border: "none",
        borderRadius: "8px",
        padding: "5px 10px",
        cursor: "pointer",
    },
    deleteHover: {
        backgroundColor: "#ef4444", // Tailwind: red-500
        color: "#fff",
    },
};
