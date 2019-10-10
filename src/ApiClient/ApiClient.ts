export function findUser(user) {
  return fetch(`http://localhost:3000/users?userName=${user}`).then(results => {
    return results.json();
  });
}

export function ingredientsList() {
  return fetch("http://localhost:3000/ingredientsList").then(results => {
    return results.json();
  });
}
