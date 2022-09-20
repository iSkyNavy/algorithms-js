function fixFiles(files) {
  let dictionary = {};
  let resp = [];
  for (let i = 0; i < files.length; i++) {
    const element = files[i];
    if (resp.includes(element)) {
      resp.push(`${element}(${dictionary[element] ?? 1})`);
      dictionary[element] += 1;
    } else {
      resp.push(element);
      dictionary[element] = 1;
    }
  }
  return resp;
}

const option = ["photo", "postcard", "photo", "photo", "video"];
console.log(fixFiles(option)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
console.log(fixFiles(files2));
// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
