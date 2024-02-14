// Snapshot da lista de rpedido de materiais para a cotação
export interface MaterialOrderSpecItem {
    descSnapshot: string;
    priceSnapshot: number;
    qty: number;
}

export interface MaterialOrderSpec {
    name: string;
    materials: MaterialOrderSpecItem[];
    tax: number;
    cost: number;
}

export interface MaterialOrderSpecs {
    selectedSpecIndex: number;
    materialOrderSpecs: MaterialOrderSpec[];
}


// Lista de pedido de materiais editável pelo admin
export interface MaterialOrderItem {
    id: string;
    isDefault: boolean;
}

export interface MaterialOrder {
    id: string;
    name: string;
    materials: MaterialOrderItem[];
}
