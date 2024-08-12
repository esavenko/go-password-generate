package handlers

import (
	"api/config"
	"crypto/sha256"
	"encoding/hex"
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

	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte(hashString))
}
