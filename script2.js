const fs = require('fs')

/*  Mude o main no package.json para script2  */

function randomDate(start, end){
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const pedidos = []; const itens_pedido = [];

const clientes = JSON.parse(fs.readFileSync('./clientes.json'))
const produtos = JSON.parse(fs.readFileSync('./produtos.json'))

for (let j = 1; j <= 50; j++ )
{
    const pedido = {

        id_pedido: j,
        id_cliente: clientes[ parseInt(Math.random() * 10) ].id,
        data: randomDate(new Date(2012, 0, 1), new Date())
    }
    pedidos.push(pedido)


    const item_pedido = {
        id_pedido: pedido.id_pedido,
        id_produto: produtos[parseInt(Math.random() * 10)].id_produto,
        qtd: parseInt(Math.random() * 5 + 1)
    }

    const item_pedido2 = {
        id_pedido: pedido.id_pedido,
        id_produto: produtos[parseInt(Math.random() * 10)].id_produto,
        qtd: parseInt(Math.random() * 5 + 1)
    }
    itens_pedido.push(item_pedido)
    itens_pedido.push(item_pedido2)

}

/* Pedidos */
fs.writeFile("./pedidos.json" , JSON.stringify(pedidos), e => {
    if(e) throw e;
    console.log("Salvo! (pedidos)");
})
/* Itens Pedido */
fs.writeFile("./itens_pedido.json" , JSON.stringify(itens_pedido), e => {
    if(e) throw e;
    console.log("Salvo! (itens_pedido)");
})
