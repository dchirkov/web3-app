//import { broadcast } from "@waves/waves-transactions";
//import { data, transfer } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'river joke obvious insect brown custom term demand define maximum lesson planet term engage rhythm';

  // Транзакция данных: добавляет записи в хранилище данных аккаунта-отправителя

  const records = [
    { key: 'integerVal', value: 23 },
    { key: 'booleanVal', value: true },
    { key: 'stringVal', value: 'Hi, this is Initial work' }
  ]

  const dataTx = data({ data: records }, seed); // Создание и подписание транзакции данных

  broadcast(dataTx,nodeUrl).then(resp => console.log(resp));