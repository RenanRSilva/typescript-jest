/*
Dependency inversion principle
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes, Detalhes devem depender de abstrações.


classes de baixo nível são classes que executam tarefas (os detalhes)
classes de alto nível são classes que gerenciam as classes de baixo nivel
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FiftyPercentDiscount, NoDiscount} from "./classes/discount";
import { TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";


const noDiscount = new NoDiscount();
//const fiftyPercentDescount =  new FiftyPercentDiscount();
//const tenPercentDescount =  new TenPercentDiscount();
const shoppingCart = new ShoppingCart(noDiscount);//Cria o objeto carrinho de compras
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer('Renan', 'Silva', '111.111.111.11')
const enterpriseCustomer = new EnterpriseCustomer('Renan', 'Silva',)
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer)//Injeção de dependência



shoppingCart.addItem(new Product('Camiseta', 50))
shoppingCart.addItem(new Product('Lapis', 9))
shoppingCart.addItem(new Product('Caneta', 10))

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
