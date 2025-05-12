import React, { useState } from "react";

export default function TaskForm({ addTask }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={styles.input}
            />
            <button type="submit" style={styles.button}>
                Add
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
    },
    button: {
        backgroundColor: "#3b82f6",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
    },
};
