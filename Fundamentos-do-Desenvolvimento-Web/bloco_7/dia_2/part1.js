const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


function vamo(order) {
  return `Ola, ${order.order.delivery.deliveryPerson}, entrega, para ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, AP ${order.address.apartment} `;
}
console.log(vamo(order));




const orderModifier = () => {
  // Adicione abaixo as informações necessárias.
  return `Ola ${order.name}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ 50,00`;
}
// "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
console.log(orderModifier());
