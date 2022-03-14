
class UnknownProductError extends Error {}

const moneyFromEuros = amount => ({ amount: amount, currency: 'EUR' })

class Money {
  static fromEuros (amount) {
    return new Money(amount, 'EUR')
  }

  constructor (amount, currency) {
    this.amount = amount
    this.currency = currency
  }
}

const calculatePriceFP = (product) => {
  switch (product) {
    case 'productA':
      return moneyFromEuros(10)
    case 'productB':
      return moneyFromEuros(11)
    default:
      throw new UnknownProductError()
  }
}

// eslint-disable-next-line no-unused-vars
const calculatePriceOOP = (product) => {
  switch (product) {
    case 'productA':
      return Money.fromEuros(10)
    case 'productB':
      return Money.fromEuros(11)
    default:
      throw new UnknownProductError()
  }
}

it('when product A was given, then price is 10', () => {
  const price = calculatePriceFP('productA')

  expect(price).toEqual({ amount: 10, currency: 'EUR' })
})

it('when product B was given, then price is 11', () => {
  const price = calculatePriceFP('productB')

  expect(price).toEqual({ amount: 11, currency: 'EUR' })
})

it('when unknown product given, then throws an exception', () => {
  expect(() => calculatePriceFP('unknownProduct')).toThrow(UnknownProductError)
})
