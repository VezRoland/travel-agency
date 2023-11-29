# Verziókezelés

## Helyi repo létrehozása
- inicializálás:
	> git init
- git felhasználó ellenőrzése:
	> git config user.name

	> git config user.email
- ellenőrzés (van különbség a munkakönyvtár és a helyi repo között?)
	> git status
- előkészítjük a commitra (beindexelődnek), minden változást eltárolunk
	> git add .
- ellenőrzés:
	> git status
- újabb verzió eltárolása:
	> git commit -m "First commit"