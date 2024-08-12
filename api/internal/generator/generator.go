package generator

import (
	"crypto/rand"
	"math/big"
)

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~"

func GeneratePassword(lenght int) (string, error) {
	password := make([]byte, lenght)
	for i := range password {
		randNum, err := rand.Int(rand.Reader, big.NewInt(int64(len(letterBytes))))

		if err != nil {
			return "", err
		}
		password[i] = letterBytes[randNum.Int64()]
	}

	return string(password), nil
}
