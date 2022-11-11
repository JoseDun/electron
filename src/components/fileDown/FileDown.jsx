import { useState } from "react";

export default function FileDown() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    global.electron.notificationApi.sendNotification("clave guardada");
    global.electron.filesApi.sendFile(data);
    setData("");
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="input" className="form-label">
          Password
        </label>

        <input
          onChange={handleChange}
          value={data}
          placeholder="Type here..."
          type="text"
          className="form-control"
          id="input"
        />

        <div id="input" className="form-text">
          We'll never share your password with anyone else.
        </div>
      </div>

      <button onClick={handleClick} className="btn btn-success">
        Save
      </button>
    </>
  );
}
