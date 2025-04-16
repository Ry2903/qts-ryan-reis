import { validarNumeroPositivo } from "./validaNumeroPositivo.ts";
import { assertRejects } from "https://deno.land/std@0.177.0/testing/asserts.ts";

Deno.test('Lançar o erro se o número for negativo', async () => {
  await assertRejects(
    async () => {
      await validarNumeroPositivo(-5); 
    },
    Error, 
    'O número não pode ser negativo',
  );
});

Deno.test('não deve lançar erro se o número for positivo', async () => {
  await validarNumeroPositivo(10);
});
