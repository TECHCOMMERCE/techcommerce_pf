# TRAER CAMBIOS 

Para traer cambios hechos desde la rama master deberan dirigirse a la rama, mediante el comando

```bash
  git checkout master
```

Este comando les traera los cambios hechos en todas las ramas, una vez tengan los cambios traidos, vuelven a su rama
```bash
  git checkout develop-name
```
Y ejecutan el comando 
```bash
  git merge master
```
Para traerse los cambios unificados de la rama master, y asi estar todos actualizados.