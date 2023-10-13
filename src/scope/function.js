function greeting() {
    let userName = 'Fabian'
    console.log(userName);

    if (userName === 'Fabian') {
        console.log('Hello ${userName}!');
    }
}

greeting();
//console.log(userName); <- no aplica ya que la variable se definio dentro de la funcion 