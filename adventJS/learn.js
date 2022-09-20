function learn(time, courses) {
  /* const arr = [...courses];
  const orderedCourses = arr.sort((a, b) => b - a);
  //   console.log(orderedCourses, courses);
  const newCourses = [];
  for (let i = 0; i < orderedCourses.length; i++) {
    const element = orderedCourses[i];
    if (element <= time) {
      time = time - element;
      const indexOfE = courses.indexOf(element);
      newCourses.push(indexOfE);
    }
  }
  return null; */
  let indexs = null;
  let max = 0;
  for (let pivot = 0; pivot < courses.length; pivot++) {
    for (let j = pivot + 1; j < courses.length; j++) {
      const total = courses[pivot] + courses[j];
      //   console.log("total:", total);
      if (total === time) return [pivot, j];
      if (courses[pivot] + courses[j] < time && max < total) {
        max = total;
        // console.log("max:", max);
        indexs = [pivot, j];
        // console.log(indexs);
      }
    }
  }
  return indexs;
}

console.log(learn(10, [2, 3, 8, 1, 4])); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(learn(15, [2, 10, 4, 1])); // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
console.log(learn(25, [10, 15, 20, 5])); // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
console.log(learn(8, [8, 2, 1])); // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
console.log(learn(8, [8, 2, 1, 4, 3])); // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.
console.log(learn(4, [10, 14, 20])); // null -> no nos da tiempo a hacer dos cursos
console.log(learn(5, [5, 5, 5])); // null -> no nos da tiempo a hacer dos cursos
