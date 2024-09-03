// Snapshot da lista de rpedido de materiais para a cotação
export class MaterialOrderSpecItem {
    descSnapshot?: string
    priceSnapshot?: number
    qty?: number
    estimatedQty?: number
}

export class MaterialOrderSpec {
    name?: string
    materials: MaterialOrderSpecItem[] = new Array<MaterialOrderSpecItem>()
    tax?: number
    cost?: number
}

export class MaterialOrderSpecs {
    selectedSpecIndex?: number
    materialOrderSpecs: MaterialOrderSpec[] = new Array<MaterialOrderSpec>()
}


// Lista de pedido de materiais editável pelo admin
export class MaterialOrderItem {
    id?: string
    name?: string
    formula?: string
}

export class MaterialOrder {
    id?: string
    name?: string
    materials: MaterialOrderItem[] = []
}
