// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = (stu, grades) => {
  return stu.map((element, index) => {
    const tamanho = grades[index].length;
    const notasJuntas = grades[index].reduce((ac, curr) => ac + curr, 0);
    return { name: element, average: notasJuntas / tamanho }
  })
}

console.log(studentAverage(students, grades));