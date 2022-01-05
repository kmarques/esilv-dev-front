// Créer un composant Table qui doit être paramétré.
// Paramètres:
//    - nbLine
//    - nbColumn
//    - cellStyle
function Table({ nbLine, nbColumn, cellStyle, CellComponent }) {
  const trs = [];
  for (let i = 0; i < nbLine; i++) {
    trs.push(
      <Row
        lineNumber={i}
        nbColumns={nbColumn}
        cellStyle={cellStyle}
        CellComponent={CellComponent}
      />
    );
  }
  return (
    <table>
      <tbody>{trs}</tbody>
    </table>
  );
}
function Row({ lineNumber, nbColumns = 5, cellStyle, CellComponent }) {
  // const tr = table.inserRows();
  // Création des colonnes
  const tds = [];
  for (let i = 0; i < nbColumns; i++) {
    tds.push(
      CellComponent ?? (
        <Column textContent={`Case ${lineNumber} ${i}`} cellStyle={cellStyle} />
      )
    );
  }
  return <tr>{tds}</tr>;
}

function Column({ textContent, cellStyle }) {
  // const td = tr.insertCell();
  // Création du contenu
  return <td style={cellStyle}>{textContent}</td>;
}

export default Table;
