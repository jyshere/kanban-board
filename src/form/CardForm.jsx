import { useState, useRef, useEffect } from "react";
import "./CardForm.css";
export default function CardForm({ initialData,onSubmit, onClose }) {
const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [priority, setPriority] = useState(initialData?.priority || "Medium");
  const [dueDate, setDueDate] = useState(initialData?.dueDate || "");
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
                <button className="card-form-add" onClick={handleSubmit}>Save</button>
                <button className="card-form-cancel" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}