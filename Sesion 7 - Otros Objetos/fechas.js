const hoy = new Date();
const nacimiento = new Date(1999,0,21);

const a = hoy > nacimiento;
const dia = nacimiento.getDate()
const mes = nacimiento.getMonth()+1;
const anyo = nacimiento.getFullYear();
