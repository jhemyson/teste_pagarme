# Api teste pagarme

- Para iniciar o projeto, devemos instalar os pacotes com npm ou yarn

- O arquivo .env não foi ignorado pelo git, para facilitar o teste

- Projeto rodando na porta 3000 ou configurar nos environments "PORT" a porta desejada

#Executando o projeto
- Para executar os testes: yarn test
- Para executar o app: yarn start

#Transações
- Criando
- POST: "/1/transactions"
ex:
- {
	"amount": 20000,
	"transaction_description": "teste transação",
	"payment_method": "debit_card",
	"card_number": "12345678",
	"card_cvv": "785",
	"card_holder_name": "Jhemyson Sousa",
	"card_expiration_date": "2020-12"
}
------------------------------------
- Buscando todas
- GET: "/1/transactions"


#Pagáveis

- Criando:
- POST: "/1/payables"
- Os pagáveis são criados automaticamente quando criamos uma nova transação,
  também podemos criar uma nova através do "id" de uma transação
ex:
-- {
  "transaction_id": "id da trasação"
}
------------------------------------

- Buscando todos
-- GET: "/1/payables"
------------------------------------

- Buscando com filtros, podemos passamos os seguintes filtros:
- status "waiting_funds" ou "paid"
- transaction_id: "id da transação"
- amount: 100
- GET: "/1/payables/search?status=waiting_funds&amount=200&transaction_id=id"
