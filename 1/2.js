"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

const cooks = new Map();
cooks.set("Пицца", "Олег");
cooks.set("Суши", "Андрей");
cooks.set("Десерт", "Анна");

const menu = new Map();
menu.set("Пицца", ["Маргарита", "Пепперони", "Три сыра"]);
menu.set("Суши", ["Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки"]);
menu.set("Десерт", ["Тирамису", "Чизкейк"]);

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  orderList = new Map();

  newOrder(client, ...order) {
    let clientFullName = `${client.firstname} ${client.lastname}`;
    // Проверим, что в заказе нет отсутствующих блюд, иначе выбросим ошибку.

    for (let product of order) {
      if (
        !menu.has(product.type) ||
        !menu.get(product.type).includes(product.name)
      ) {
        throw new Error(`${product.type} ${product.name} - такого блюда не существует`);
      }
    }

    // добавим заказ в заказы клиента
    if (!this.orderList.has(clientFullName)) {
      this.orderList.set(clientFullName, order);
    } else {
      order.forEach((product) => {
        // console.log(product.name);
        let productIndex = this.orderList
          .get(clientFullName)
          .findIndex((ordered) => ordered.name === product.name);
        if (productIndex < 0) {
          this.orderList.get(clientFullName).push(product);
        }
        if (productIndex >= 0) {
          this.orderList.get(clientFullName)[productIndex].quantity +=
            product.quantity;
        }
      });
    }
    console.log(`Клиент ${client.firstname} заказал:`);
    this.orderList.get(clientFullName).forEach((clientOrder) => {
      console.log(
        `${clientOrder.type} "${clientOrder.name}" - ${
          clientOrder.quantity
        }; готовит повар ${cooks.get(clientOrder.type)}`
      );
    });
    console.log("");
    // for(let orders of this.orderList.get(clientFullName)){
    //   console.log(orders);
    // }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
