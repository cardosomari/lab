// 2.2.5 Tipos de Dados - Laboratório
// Objetivo: Utilizar Array e Object para armazenar e manipular uma lista de contatos.

/**
 * Lista inicial de contatos, formatada como um Array de Objects.
 * Cada Object contém as propriedades name, phone e email.
 */
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// O novo contato a ser adicionado
const newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};

// 1. Adiciona o novo contato ao final do array usando o método 'push'.
contacts.push(newContact);

// 2. Exibe o primeiro contato (índice 0).
console.log("--- Primeiro Contato (Índice 0) ---");
const firstContact = contacts[0];
console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
console.log("-----------------------------------\n");

// 3. Exibe o último contato.
// O índice do último elemento é sempre o comprimento total do array menos 1.
console.log("--- Último Contato (Usando length) ---");
const lastIndex = contacts.length - 1;
const lastContact = contacts[lastIndex];

console.log(`Índice do Último Elemento: ${lastIndex}`);
console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
console.log("------------------------------------\n");

// Opcional: Mostra a lista completa para verificação
// console.log("Lista Completa de Contatos:", contacts);
