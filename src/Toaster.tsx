import { useState } from "react";
const Toaster = () => {
  const [toast, setToast] = useState([]);
  const showToast = (text: string, type: string) => {
    const id = Date.now();
    const newToast = {
      id,
      text,
      type,
    };
    setToast((prev) => [...prev, newToast]);
    setTimeout(() => handleRemove(id), 5000);
  };
  const handleRemove = (id: number) => {
    setToast((prev) => prev.filter((val) => val.id !== id));
  };
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div>
        <button onClick={() => showToast("success", "success")}>Success</button>
        <button onClick={() => showToast("warning", "warning")}>Warning</button>
        <button onClick={() => showToast("error", "error")}>Error</button>
      </div>
      <div>
        {toast.map(({ id, text, type }) => {
          return (
            <div key={id} className="toasterContainer">
              <div className={`toaster ${type}`}>
                <div>{text}</div>
                <span
                  onClick={() => handleRemove(id)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0.2,
                    cursor: "pointer",
                  }}
                >
                  X
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toaster;
