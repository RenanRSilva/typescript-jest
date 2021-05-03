# Princípios S.O.L.I.D em TypeScript

## Single Responsability Principle
<h3>Cada entidade deve ter responsabilidade sobre uma única parte da funcionalidade do software<h3><br>

## Open Closed Principle
<h3>A classe deve ser aberta para extenção mas fechada para modificação<h3><br>

## Liskov Substitution Principle
<h3>Subtipos precisam ser substituiveis por seu tipo de base <br>
Exemplo: Se meu programa espera um Animal, algo do tipo Cachorro
(que herda de animal) deve servir como qualquer outro Animal.<h3> <br>

## Interface Segregation Principle<mark>
<h3>Os clientes não devem ser forçados a depender de interfaces que não utilizam.<h3> <br>

## Dependency Inversion Principle
<h3>Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.<h3> <br>

 # Vantagens e desvantagens S.O.L.I.D.


## Vantagens

<li> Código Modular
<li> Còdigo reutilizavel (D.R.Y - Don't Repeat Yourself)
<li> Código testavel, baixo acoplamento
<li> Baixo acoplamento e alta coesão
<li> Código expansível
<li> Separation of concerns (Separação de Conceitos)
<li> Fácil Manutenção
<br><br>

## Desvantagens
- Complexidade
- Quantidade de código digitado aumenta
- Maior tempo de desenvolvimento
- Tenha cuidado com: YAGNI, KISS (You aran't gonna need it/ Keep it simple, Stupid)