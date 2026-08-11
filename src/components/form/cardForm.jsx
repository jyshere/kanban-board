import { useState, useRef, useEffect } from "react";
import "./cardForm.css";
export default function CardForm({ onSubmit, onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);//Since [onClose] is the dependency, this effect re-runs only when onClose changes.

    const handleSubmit = () => {
        if (!title.trim()) return;
        onSubmit({ title, description, priority, dueDate });
    };

    return (
        <div className="card-form" ref={formRef}>

            <div className="title-required">
                <span className="required">*</span>
                <input
                className="card-form-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Card title"
                autoFocus//autoFocus puts the cursor automatically in the title field when the form opens.
            />
            </div>
            
            <textarea
                className="card-form-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                rows={3}
            />
            <select
                className="card-form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                className="card-form-date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <div className="card-form-actions">
                <button className="card-form-add" onClick={handleSubmit}>Add</button>
                <button className="card-form-cancel" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}