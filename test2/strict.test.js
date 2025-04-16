import { strictEqual } from "https://deno.land/std@0.185.0/testing/asserts.ts";

function soma(a, b) {
  return a + b;
}

const resultado = soma(2, 3);
strictEqual(resultado, 5, "A soma de 2 e 3 deve ser 5");
