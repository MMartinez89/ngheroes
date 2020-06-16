# NgHeroes

publicado en => https://jcvaldes.github.io/ngheroes

## Instalar o actualizar angular

```
npm i -g @angular/cli
```

## Versión de angular
```
ng --version
```

## publicar en github pages

```
npm i -g angular-cli-ghpages
ng build --prod --base-href "https://MMartinez89.github.io/ngheroes/"
npx ngh --dir=dist/ngheroes
```

## Crear componentes
```
ng generate component shared/navbar 
ng g c shared/navbar

ng g c home/home -is (no crea scss)
                 --skip-tests (no crea test)
```# NgHeroes

publicado en => https://jcvaldes.github.io/ngheroes

## Instalar o actualizar angular

```
npm i -g @angular/cli
```

## Versión de angular
```
ng --version
```

## publicar en github pages

```
npm i -g angular-cli-ghpages
ng build --prod --base-href "https://jcvaldes.github.io/ngheroes/"
npx ngh --dir=dist/ngheroes
```

## Crear componentes
```
ng generate component shared/navbar 
ng g c shared/navbar

ng g c home/home -is (no crea scss)
                 --skip-tests (no crea test)
```