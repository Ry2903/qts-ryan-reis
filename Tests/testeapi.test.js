import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = "Cróvis José"
let professores = ['João', 'Laís', 'Davi', 'Nachara']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José"); //Se inclui "José", em qualquer lugar, na variável (String) "aluno"
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,
        ['Davi', 'Lais', 'Alan'],
        "Opa! Algo deu errado") //Se inclui os três nomes no Array "professores"
})