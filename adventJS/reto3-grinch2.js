const regex = /^.*((\[|\{|\]|\}){1}).*$/;
// const txt2 = "bici coche (balón) bici coche peluche";
// const txt2 = "(muñeca) consola bici";
// const txt2 = "bici coche (balón bici coche";
const txt2 = "(peluche {) bici";
// const txt2 = "() bici";
const isValid = (txt) => {
  //   const letters = txt.split(" ");
  //   const w = txt.match(/\([0-9a-zA-ZÀ-ÿ\u00f1\u00d1]{1,+}\)/);
  const open = [...txt].filter((letra) => letra === "(").length;
  const close = [...txt].filter((letra) => letra === ")").length;
  //   const vacio = txt.replace("()", "").trim();
  console.log(w);
  if (
    regex.test(txt) ||
    open !== close ||
    txt[0] == ")" ||
    letter.length > vacio.length
  ) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};

isValid(txt2);
