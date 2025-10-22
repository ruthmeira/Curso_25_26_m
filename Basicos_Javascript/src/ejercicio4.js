

// pasar una nota y decir es si es aprobado o suspenso


const aprobados = (nota=0) => nota >= 5 ? "aprobado" : "suspenso";
console.log(aprobados(7));

const aprobados2 = (nota=0) => nota >= 9 ? "sobresaliente" : nota >= 5 ? "aprobado" : "suspenso";
console.log(aprobados2(4));
//mayor he igual que 9 es sobresaliente
//si est entre 5 y 9 es aprobado
//si es menor que 5 es suspenso