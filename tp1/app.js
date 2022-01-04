/**
 * Générer un tableau de 5x5 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 *
 * Fonctions interdites: innerHTML, innerText, document.write, onclick, onblur
 */
const table = document.createElement("table");
const root = document.getElementById("root");

// Création des lignes
for (let i = 0; i < 5; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  // const tr = table.inserRows();
  // Création des colonnes
  for (let j = 0; j < 5; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    // const td = tr.insertCell();
    // Création du contenu
    const text = document.createTextNode("Case " + i + " " + j);
    td.appendChild(text);
    //td.textContent = "Case " + i + " " + j;
    // Gestion de l'événement
    td.addEventListener("click", handleTdClick);
  }
}

root.appendChild(table);

function handleTdClick(event) {
  const td = event.currentTarget;
  const input = document.createElement("input");
  input.value = td.textContent;
  td.textContent = "";
  input.addEventListener("blur", handleInputBlur);
  td.appendChild(input);
  td.removeEventListener("click", handleTdClick);
  input.focus();
}

function handleInputBlur(event) {
  const input = event.currentTarget;
  const td = input.parentNode;
  const text = document.createTextNode(input.value);
  input.removeEventListener("blur", handleInputBlur);
  td.replaceChild(text, input);
  td.addEventListener("click", handleTdClick);
}
/*<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>*/
