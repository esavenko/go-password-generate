package main

import (
	"api/config"
	"api/internal/handlers"
	"log"
	"net/http"
)

func main() {
	config.LoadEnv()

	http.HandleFunc("/generate", handlers.PasswordHandler)

	http.HandleFunc("/hash", handlers.HashPasswordHandler)

	log.Println("Server started at :4200")
	if err := http.ListenAndServe(":4200", nil); err != nil {
		log.Fatal("Server failed:", err)
	}
}
