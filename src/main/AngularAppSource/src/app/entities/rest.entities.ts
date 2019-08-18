/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.16.538 on 2019-08-18 18:34:48.

export interface AtributoCustomizavel {
    id: number;
    nome: string;
    valor: string;
}

export interface ItemPedido {
    id: number;
    idProduto: number;
    codigoProduto: string;
    nomeProduto: string;
    precoProdutoVenda: number;
    quantidade: number;
    valorParcial: number;
}

export interface Pedido {
    id: number;
    codigo: string;
    dataCompra: string;
    nomeComprador: string;
    estado: string;
    valorFrete: number;
    valorTotal: number;
    itensDoPedido: ItemPedido[];
}

export interface Periodo {
    dataInicial: string;
    dataFinal: string;
}

export interface Produto {
    id: number;
    codigo: string;
    nome: string;
    descricao?: string;
    estoque: number;
    preco: number;
    atributosCustomizaveis?: AtributoCustomizavel[];
}

export interface Relatorio {
    periodo: Periodo;
    valorTotalVendas: number;
}

export interface RelatorioTicketMedioPorCompradores extends Relatorio {
    quantidadeCompradores: number;
    ticketMedio: number;
}

export interface RelatorioTicketMedioPorVendas extends Relatorio {
    quantidadeVendas: number;
    ticketMedio: number;
}
