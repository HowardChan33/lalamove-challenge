#!/usr/bin/env node
const program = require("commander");

const { createOrder, listOrder, takeOrder } = require("./database");

program.version("1.0.0").description("Order System");



program.command("create_order <from> <to>").action((from, to) => {
  createOrder(from, to);
});

program.command('list_orders').description('list_orders').action(() => {
  listOrder();
});

program.command('take_order <id>').action((id) => {
    takeOrder(id);
})

program.parse(process.argv);



//program
//    .command('create_order <from> <to>')
//    .alias('a')
//    .description('Create an order')
//    .action((from, to)=>{
//        createOrder(from, to);
//    });

//program.command('list_orders').alias('f').description('list_orders').action(listOrder());
