package main

import (
	"api/config"
	"api/internal/handlers"
	"api/internal/middleware"
	"log"
	"net/http"
)

func main() {
	config.LoadEnv()

	mux := http.NewServeMux()

	mux.HandleFunc("/generate", handlers.PasswordHandler)

	mux.HandleFunc("/hash", handlers.HashPasswordHandler)

	wrappedMux := middleware.CORSMiddleware(mux)

	log.Println("Server started at :4200")
	if err := http.ListenAndServe(":4200", wrappedMux); err != nil {
		log.Fatal("Server failed:", err)
	}
}
