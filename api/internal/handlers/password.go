package handlers

import (
	"api/internal/generator"
	"net/http"
	"strconv"
)

func PasswordHandler(w http.ResponseWriter, r *http.Request) {
	lengthParam := r.URL.Query().Get("length")
	length := 8 // Длина по умолчанию, можно менять query параметром
	
	if lengthParam != "" {
		if l, err := strconv.Atoi(lengthParam); err == nil {
			length = l
		}
	}

	password, err := generator.GeneratePassword(length)
	if err != nil {
		http.Error(w, "Unable to generate password", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte(password))
}
