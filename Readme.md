# Verziókezelés

## Helyi repo létrehozása
- inicializálás
	> git init
- git felhasználó ellenőrzése
	> git config user.name

	> git config user.email
- ellenőrzés (van különbség a munkakönyvtár és a helyi repo között?)
	> git status
- előkészítjük a commitra (beindexelődnek), minden változást eltárolunk
	> git add .
- ellenőrzés
	> git status
- újabb verzió eltárolása
	> git commit -m "First commit"

## Összekapcsolás egy távoli repoval (GitHub)
- új GitHub repo létrehozása
- helyi repo összekapcsolás a távolival
	> git remote add origin https://token@github.com/VezRoland/travel-agency.git
- első push-nál meg kell adni a branch nevét
	> git push -u origin master