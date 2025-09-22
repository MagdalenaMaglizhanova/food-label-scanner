import React, { useEffect, useState } from "react";

const Scanner: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/scanner/list-test-files`)
      .then((res) => res.json())
      .then((data) => setFiles(data.files || []))
      .catch(() => setError("Не успях да заредя файловете"));
  }, []);

  const handleScan = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/scanner/scan-from-test?filename=${selectedFile}`);

      if (!response.ok) {
        throw new Error(`Грешка в сървъра: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.report || "Няма разпознат текст");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Неизвестна грешка");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-container">
      <div className="scanner-card">
        <h2 className="scanner-title">
          <i className="fas fa-camera"></i> OCR тест от сървъра
        </h2>
        <p className="scanner-description">
          Изберете тестово изображение, качено на сървъра, и ние ще анализираме съставките.
        </p>

        <div className="scanner-upload-area">
          <select
            value={selectedFile || ""}
            onChange={(e) => setSelectedFile(e.target.value)}
            className="file-input"
          >
            <option value="">-- Изберете файл --</option>
            {files.map((file, idx) => (
              <option key={idx} value={file}>
                {file}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleScan}
          disabled={loading || !selectedFile}
          className="scan-button"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Обработване...
            </>
          ) : (
            <>
              <i className="fas fa-search"></i> Сканирай
            </>
          )}
        </button>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="result-container">
            <h3 className="result-title">
              <i className="fas fa-file-alt"></i> Резултат от анализа:
            </h3>
            <div className="result-content">
              {result.split("\n").map((line, index) => (
                <p key={index} className="result-line">{line}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
