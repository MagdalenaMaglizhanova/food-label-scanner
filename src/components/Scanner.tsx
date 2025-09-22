// Scanner.tsx
import React, { useState } from "react";

const Scanner: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleScan = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_URL}/api/scan`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Грешка в сървъра: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setResult(data);
      } else {
        throw new Error(data.error || 'Грешка при обработка');
      }
    } catch (err: unknown) {
      console.error('Error during scan:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Неизвестна грешка');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-container">
      <div className="scanner-card">
        <h2 className="scanner-title">
          <i className="fas fa-camera"></i> Анализ на хранителен етикет
        </h2>
        <p className="scanner-description">
          Качи снимка на етикет и ние ще анализираме съставките.
        </p>

        <div className="scanner-upload-area">
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleFileChange}
            className="file-input"
          />
          {selectedFile && (
            <p className="file-info">Избран файл: {selectedFile.name}</p>
          )}
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
              <i className="fas fa-search"></i> Анализирай етикет
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
            
            <div className="result-section">
              <h4>📄 Разпознат текст:</h4>
              <div className="text-content">
                {result.ocr_text}
              </div>
            </div>

            {result.harmful_e_numbers.length > 0 && (
              <div className="result-section harmful-section">
                <h4>🚨 Вредни E-номера:</h4>
                {result.harmful_e_numbers.map((item: any, index: number) => (
                  <div key={index} className="harmful-item">
                    <strong>{item.code}</strong>: {item.description}
                  </div>
                ))}
              </div>
            )}

            {result.harmful_keywords.length > 0 && (
              <div className="result-section warning-section">
                <h4>⚠️ Засечени съставки:</h4>
                {result.harmful_keywords.map((item: any, index: number) => (
                  <div key={index} className="keyword-item">
                    <strong>{item.keyword}</strong>: {item.reason}
                  </div>
                ))}
              </div>
            )}

            {result.alternatives.length > 0 && (
              <div className="result-section alternatives-section">
                <h4>🍽 Препоръчани алтернативи:</h4>
                {result.alternatives.map((alt: string, index: number) => (
                  <div key={index} className="alternative-item">{alt}</div>
                ))}
              </div>
            )}

            <div className="result-section">
              <h4>📊 Пълен отчет:</h4>
              <div className="report-content">
                {result.report.split('\n').map((line: string, index: number) => (
                  <p key={index} className="report-line">{line}</p>
                ))}
              </div>
            </div>

            <button
              className="download-button"
              onClick={() => {
                const blob = new Blob([result.report], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'анализ-етикет.txt';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              ⬇️ Изтегли отчет
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
