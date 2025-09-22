import React, { useState } from "react";

const Scanner: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;
  console.log("🚀 API_URL =", API_URL); // Проверка дали env е правилно

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      console.log("📎 Избран файл:", selectedFile);

      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);

      setResult(null);
      setError(null);
    }
  };

  const handleScan = async () => {
    if (!file) {
      console.warn("⚠️ Опит за сканиране без избран файл!");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    console.log("📤 Изпращам заявка към:", `${API_URL}/scanner/scan`);
    console.log("📦 FormData съдържа:", formData.get("file"));

    try {
      const response = await fetch(`${API_URL}/scanner/scan`, {
        method: "POST",
        body: formData,
      });

      console.log("📥 Отговор от сървъра (raw):", response);

      if (!response.ok) {
        throw new Error(`Грешка в сървъра: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ JSON отговор:", data);

      setResult(data.report || "Няма разпознат текст");
    } catch (err: unknown) {
      console.error("❌ Грешка при fetch:", err);
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
          <i className="fas fa-camera"></i> Засичане на вредни съставки
        </h2>
        <p className="scanner-description">
          Качете снимка на етикет на хранителен продукт и ние ще анализираме съставките за потенциално вредни вещества.
        </p>

        <div className="scanner-upload-area">
          <label htmlFor="file-upload" className="file-upload-label">
            <div className="upload-content">
              <i className="fas fa-cloud-upload-alt"></i>
              <p>{file ? file.name : "Изберете изображение"}</p>
            </div>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          </label>

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <button
          onClick={handleScan}
          disabled={loading || !file}
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
                <p key={index} className="result-line">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
