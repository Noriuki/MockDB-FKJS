const faker = require('faker');
var fs = require('fs');

faker.locale = "pt_BR";

const clientes = [];
const produtos = [];

/*Altere o for para quantidade desejada!*/
for (let i = 0; i < 20; i++) {

    
    var cliente = {
        Nome: faker.name.firstName() + ' ' + faker.name.lastName(),
        Endereço: {
            id_cliente: i,
            Cidade: faker.address.city(),
            País: faker.address.country(),
            Estado: faker.address.stateAbbr(),
            Rua: faker.address.streetName(),
            CEP: faker.address.zipCode()
        }
    }
    clientes.push(cliente)

    var produto = {
        id_produto: i,
        Produto: faker.commerce.product(),
        Preço:faker.commerce.price(),
    }
    produtos.push(produto)
}

/*=============Pessoas============== */
fs.writeFile("./clientes.json", JSON.stringify(clientes), function(err) {
    if(err) throw err;
    console.log("Salvo! (Clientes)");
}); 
/*=============Produto============== */
fs.writeFile("./produtos.json", JSON.stringify(produtos), function(err) {
    if(err) throw err;
    console.log("Salvo! (Produtos)");
}); 
