# foodmeup-exo2

## How to use :
- Clone the repo
- Open the "index.js" file and change the value for "number" (l.16)
- Run ```node index.js``` while in the directory and you'll get your result

## Description:
- index.js : The main file with the main algorithm (findIt)
- test.js: contains the "testNumber" function which gives the result of the sum for n, n-1 and n+1, so as to check if the answer is right.

## Example:
### Case = 1
```{r, engine='bash', count_lines}
L'algorithme a trouvé 2 comme étant la solution optimale pour 1
La somme des 1/k pour 1 vaut 1
La somme des 1/k pour 2 vaut 1.5
La somme des 1/k pour 3 vaut 1.8333333333333333
```

### Cas = 2
```{r, engine='bash', count_lines}
L'algorithme a trouvé 4 comme étant la solution optimale pour 2
La somme des 1/k pour 3 vaut 1.8333333333333333
La somme des 1/k pour 4 vaut 2.083333333333333
La somme des 1/k pour 5 vaut 2.283333333333333
```

### Cas = 12
```{r, engine='bash', count_lines}
L'algorithme a trouvé 91380 comme étant la solution optimale pour 12
La somme des 1/k pour 91379 vaut 11.999992108351982
La somme des 1/k pour 91380 vaut 12.000003051665617
La somme des 1/k pour 91381 vaut 12.000013994859497
```

### Cas = -21 (idem pour 0)
```{r, engine='bash', count_lines}
L'algorithme a trouvé 1 comme étant la solution optimale pour -21
La somme des 1/k n'a pas de valeur pour 0
La somme des 1/k pour 1 vaut 1
La somme des 1/k pour 2 vaut 1.5
```
