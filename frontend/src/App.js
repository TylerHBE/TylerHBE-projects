import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

function App() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/files`).then(response => {
            setFiles(response.data);
        });
    }, []);

    const handleDownload = (filename) => {
        window.location.href = `${API_URL}/download/${filename}`;
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Project Files</h1>
            <ul>
                {files.map(file => (
                    <li key={file.name} style={{ marginBottom: "10px" }}>
                        <strong>{file.name}</strong> (Downloaded {file.downloadCount} times)
                        <button onClick={() => handleDownload(file.name)} style={{ marginLeft: "10px" }}>
                            Download
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
