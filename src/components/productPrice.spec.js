class UnknownProductError extends Error {}

function getProductPrice (productA) {
  switch (productA) {
    case 'productA': return '10$'
    case 'productB': return '12$'
    default: throw new UnknownProductError()
  }
}

it('when product A was given, then price is 10$', () => {
  expect(getProductPrice('productA')).toBe('10$')
})

it('when product B was given, then price is 12$', () => {
  expect(getProductPrice('productB')).toBe('12$')
})

it('when unknown product was given, then throws UnknownProductError', () => {
  expect(() => getProductPrice('unknown'))
    .toThrow(UnknownProductError)
})
