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
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = ({order, name, phoneNumber, address}) => {
  // Adicione abaixo as informações necessárias.
  // console.log(order, name,phoneNumber,address)
return `Olá ${order.delivery.deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address.street}, ${address.number}, ${address.apartment}`
};

console.log(customerInfo(order));

const orderModifier = ({order, name, payment}) => {
  // Adicione abaixo as informações necessárias.
  let pizzas = Object.keys(order.pizza);
  console.log(pizzas)
  name = 'Luiz Silva';
  payment.total = 'R$ 50,00.'
  return `Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.drinks.coke.type}, é ${payment.total}`
};

console.log(orderModifier(order));