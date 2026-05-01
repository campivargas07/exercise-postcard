// Excuse Generator
// This script generates random excuses for various situations

const who = ['Mi perro', 'Mi gato', 'Mi abuela', 'Mi vecino', 'El tráfico', 'Mi hermano', 'Mi hermana', 'Mi profesor'];
const action = ['comió', 'rompió', 'perdió', 'escondió', 'destruyó', 'robó', 'quemó', 'mojó', 'olvidó', 'tiró'];
const what = ['mi tarea', 'mi teléfono', 'mis llaves', 'mi billetera', 'mi computadora', 'mi coche', 'mi libro', 'mi proyecto', 'mi cena', 'mi reunión'];
const when = ['hoy', 'ayer', 'esta mañana', 'anoche', 'la semana pasada', 'el mes pasado', 'durante el fin de semana', 'mientras dormía'];

function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    
    const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    return excuse;
}

// Generate and print a random excuse
const excuse = generateExcuse();
console.log(excuse);