/**
 * Générer un tableau de 2x2 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 *
 * Fonctions interdites: innerHTML, innerText, document.write, onclick, onblur
 */
const root = document.getElementById("root");

const struct = {
  type: "table",
  children: [
    {
      type: "tr",
      children: [
        {
          type: "th",
          attrs: {
            colspan: 2,
            style: "background-color: red",
          },
          children: ["Header"],
        },
      ],
    },
    {
      type: "tr",
      children: [
        {
          type: "td",
          attrs: {
            onClick: handleTdClick,
          },
          children: ["Case 0 0"],
        },
        {
          type: "td",
          attrs: {
            onClick: handleTdClick,
          },
          children: ["Case 0 1"],
        },
      ],
    },
    {
      type: "tr",
      children: [
        {
          type: "td",
          attrs: {
            onClick: handleTdClick,
          },
          children: ["Case 1 0"],
        },
        {
          type: "td",
          attrs: {
            onClick: handleTdClick,
          },
          children: ["Case 1 1"],
        },
      ],
    },
  ],
};

const table = generateStructure(struct);
root.appendChild(table);

function generateStructure(struct) {
  const { type, attrs, children } = struct;
  const element = document.createElement(type);
  if (attrs) {
    for (let key in attrs) {
      if (key.match(/^on[A-Z]/)) {
        element.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
      }
      element.setAttribute(key, attrs[key]);
    }
  }
  children.forEach((child) => {
    if (typeof child === "string") {
      const text = document.createTextNode(child);
      element.appendChild(text);
    } else {
      element.appendChild(generateStructure(child));
    }
  });
  struct.node = element;
  return element;
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
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>*/
