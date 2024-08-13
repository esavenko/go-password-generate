package handlers

import (
	"api/config"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"io"
	"net/http"
)

func HashPasswordHandler(w http.ResponseWriter, r *http.Request) {
	password, err := io.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "Unable to read password", http.StatusBadRequest)
		return
	}

	salt := config.GetSalt()

	hash := sha256.Sum256([]byte(salt + string(password)))
	hashString := hex.EncodeToString(hash[:])

	w.Header().Set("Content-Type", "application/json")
	
	respose := map[string]string{"hashed_password": hashString}
	jsonResponse, err := json.Marshal(respose)

	if err != nil {
		http.Error(w, "Unable to create JSON response", http.StatusInternalServerError)
		return
	}

	w.Write(jsonResponse)
}
