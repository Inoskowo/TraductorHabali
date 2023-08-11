import React, { useState } from 'react';
import axios from 'axios';
import './styles/style.css';

function TranslationForm() {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('es');
    const [targetLanguage, setTargetLanguage] = useState('en');
    const [translation, setTranslation] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleTranslation = async () => {
        try {
            console.log('Handling translation...');
            console.log('Text:', text);
            console.log('Source Language:', sourceLanguage);
            console.log('Target Language:', targetLanguage);

            const response = await axios.post('http://localhost:8080/backend/translate', {
                text,
                sourceLanguage,
                targetLanguage
            });

            console.log('Translation response:', response.data);

            setTranslation(response.data);
            setIsCopied(false);
        } catch (error) {
            console.error('Error translating text:', error);
            setTranslation('Error al traducir el texto.');
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(translation);
        setIsCopied(true);
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <select
                        className="form-control mb-3 custom-select"
                        value={sourceLanguage}
                        onChange={(e) => setSourceLanguage(e.target.value)}
                    > <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="de">Alemán</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portugués</option>
                    <option value="ru">Ruso</option>
                    <option value="ja">Japonés</option>
                    <option value="fr">Francés</option>
                        {/* Opciones de idioma */}
                    </select>
                    <textarea
                        className="form-control mb-3 custom-textarea"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Ingresa el texto a traducir"
                    />
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <button className="custom-translate-button" onClick={handleTranslation}>
                        Traducir
                    </button>
                </div>
            <div className="col-md-4">
                    <select
                        className="form-control mb-3 custom-select"
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                    ><option value="en">Inglés</option>
                    <option value="de">Alemán</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portugués</option>
                    <option value="ru">Ruso</option>
                    <option value="ja">Japonés</option>
                     <option value="es">Español</option>
                    <option value="fr">Francés</option>
                        {/* Opciones de idioma */}
                    </select>
                    <textarea
                        className="form-control custom-textarea"
                        value={translation}
                        readOnly
                        placeholder="Traducción"
                    />          
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <button className="copy-button" onClick={handleCopy} disabled={!translation || isCopied}>
                        {isCopied ? '¡Copiado!' : 'Copiar Traducción'}
                    </button>
              </div>
           </div>
      </div>
   </div>
</div>

    );
}

export default TranslationForm;
