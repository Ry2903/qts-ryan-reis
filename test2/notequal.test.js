import { notEqual } from "https://deno.land/std@0.185.0/testing/asserts.ts";

function multiplicar(a, b) {
  return a * b;
}

const resultado = multiplicar(2, 3);
notEqual(resultado, 7, "A multiplicação de 2 e 3 não deve ser igual a 7");
