let nacionalidade = prompt("Escreva aqui a sua nacionalidade").toLowerCase();


if (nacionalidade == "brasileira") {
  console.log("Nacionalidade brasileira");
} else {
  if (nacionalidade == "argentina") {
    console.log("Nacionalidade argentina");
  } else {
    if (nacionalidade == "uruguaia") {
      console.log("Nacionalidade Uruguaia");
    } else {
      if (nacionalidade == "chilena") {
        console.log("Nacionalidade chilena");
      } else {
        if (nacionalidade == "colombiana") {
          console.log("Nacionalidade colombiana");
        } else {
          console.log("Nacionalidade não encontrada");
        }
      }
    }
  }
}
