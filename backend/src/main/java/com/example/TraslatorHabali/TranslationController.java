package com.example.TraslatorHabali;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;

@RestController
public class TranslationController {

    @PostMapping("/backend/translate")
    public String translateText(@RequestBody TranslationRequest translationRequest) {
        String apiKey = ""; // Utiliza tu clave de API

        String text = translationRequest.getText();
        String targetLanguage = translationRequest.getTargetLanguage();

        // Configura las opciones de Google Cloud Translation API
        Translate translate = TranslateOptions.newBuilder().setApiKey(apiKey).build().getService();

        // Realiza la traducción
        Translation translation = translate.translate(text, Translate.TranslateOption.targetLanguage(targetLanguage));
        String translatedText = translation.getTranslatedText();

        System.out.println("Received translation request");
        System.out.println("Text: " + text);
        System.out.println("Target Language: " + targetLanguage);
        System.out.println("Translated Text: " + translatedText);

        return translatedText;
    }
}
