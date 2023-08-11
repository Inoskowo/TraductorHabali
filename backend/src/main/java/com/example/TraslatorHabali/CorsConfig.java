package com.example.TraslatorHabali;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000") // Cambia esto por el origen de tu frontend
                        .allowedMethods("GET", "POST", "OPTIONS") // Solo permitir métodos necesarios
                        .allowedHeaders("Content-Type"); // Permitir solo las cabeceras necesarias
            }
        };
    }
}
