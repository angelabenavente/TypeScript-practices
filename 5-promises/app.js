"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const dns_1 = require("dns");
(() => {
    const retirarDinero = (cantidad) => {
        let dineroAct = 1000;
        return new Promise((dns_1.resolve, assert_1.rejects));
    };
    {
        if (cantidad > dineroAct) {
            assert_1.rejects('No hay suficientes fondos');
        }
        else {
            dineroAct -= cantidad;
            dns_1.resolve(dineroAct);
        }
    }
    ;
});
retirarDinero(1500)
    .then(dineroAct => console.log(`Me queda ${dineroAct}`))
    .catch(console.warn);
();
