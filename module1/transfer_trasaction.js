//import { broadcast } from "@waves/waves-transactions";
//import { data, transfer } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'river joke obvious insect brown custom term demand define maximum lesson planet term engage rhythm';


  // Транзакция перевода: отправляет 1 WAVES на заданный адрес

  const money = {
    recipient: '3MuAMMFgHdGZFsnxX8emNP9db28uFA3wyXj',
    amount: 10000000 // Фактическое количество ассета нужно умножить на 10^decimals
  }

  const transferTx = transfer(money, seed); // Создание и подписание транзакции перевода

  broadcast(transferTx,nodeUrl).then(resp => console.log(resp));
