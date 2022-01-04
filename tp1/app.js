/**
 * Générer un tableau de 5x5 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 *
 * Fonctions interdites: innerHTML, innerText, document.write, onclick, onblur
 */
const root = document.getElementById("root");
const table = Table();
root.appendChild(table);

const table1 = Table(10, 10);
root.appendChild(table1);

function Table(nbLines = 5, nbColumns = 5) {
  const table = document.createElement("table");
  // Création des lignes
  for (let i = 0; i < nbLines; i++) {
    const tr = Row(i, nbColumns);
    table.appendChild(tr);
  }
  return table;
}

function Row(lineNumber, nbColumns = 5) {
  const tr = document.createElement("tr");
  // const tr = table.inserRows();
  // Création des colonnes
  for (let j = 0; j < nbColumns; j++) {
    const td = Column("Case " + lineNumber + " " + j);
    tr.appendChild(td);
  }
  return tr;
}

function Column(textContent) {
  const td = document.createElement("td");
  // const td = tr.insertCell();
  // Création du contenu
  const text = document.createTextNode(textContent);
  td.appendChild(text);
  //td.textContent = "Case " + i + " " + j;
  // Gestion de l'événement
  td.addEventListener("click", handleTdClick);
  return td;
}

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
