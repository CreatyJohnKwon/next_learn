const cartArr = [
    { category: "클래식과 트렌드의 완벽한 조화", price: "르퍼스널오더", geather: "오리지널 | 뉴브랜드" },
    { category: "우아한 일상으로의 초대", price: "메종바인(Maison VINE)", geather: "오리지널 | 뉴브랜드" },
    { category: "여성의 일상에 스며들다", price: "오떼뜨(Octette)", geather: "오리지널 | 뉴브랜드" }
]

const countData = 0

export type CartListProp = {
    category: string,
    price: string,
    geather: string,
    color: string
}

export {
    countData,
    cartArr
}