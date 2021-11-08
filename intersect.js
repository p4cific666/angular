function intersect(array0, array1) {
    const result = array0.filter(x => array1.includes(x) > -1);  //непосредственно нахождение пересечений массивов
  
    return Array.from(new Set(result)).sort();  // удаление дублирующихся значений и сортировка по возрастанию
}

const array0 = [3, 3, 2, 1];
const array1 = [3, 2, 4, 2, 2, 1, 5];

console.log(intersect(array0, array1))
