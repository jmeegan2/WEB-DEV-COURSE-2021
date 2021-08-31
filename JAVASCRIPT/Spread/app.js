const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'}

const catDog = {...feline,...canine}

const dataFromForm = {
    email: 'jmeegan8@gmail.com',
    password: 'PussySlayerWeedSmoker698008',
    username: 'Oof'
}
const newUser = {...dataFromForm, id: 2345, isAdmin:false}