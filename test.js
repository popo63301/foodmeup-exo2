function sum(j) {
  let k = 0;
  let k_num = 0

	while (k_num<j) {
		k_num = k_num + 1
		k = k + 1/k_num
	}

  return k
}

var testNumber = function(n, number) {
  let before = sum(n-1)
  let currentSum = before + 1/n
  let after = currentSum + 1/(n+1)

  console.log("L'algorithme a trouvé", n, "comme étant la solution optimale pour", number)
  n-1 === 0 ? console.log("La somme des 1/k n'a pas de valeur pour 0")
            : console.log("La somme des 1/k pour",n-1,"vaut",before)
  console.log("La somme des 1/k pour",n,"vaut",currentSum)
  console.log("La somme des 1/k pour",n+1,"vaut",after)
}


// testNumber(2)

exports.testNumber = testNumber;
