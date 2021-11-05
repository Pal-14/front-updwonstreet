// fonction pour le changement dans les inputs on recupère la valeur et on la remet dans le modificateur de State.
const onChange = (e, setter)=> {
    setter(e.target.value)

}


module.exports = {
    onChange
}