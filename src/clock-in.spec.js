const clockInNoGPS = async ({ httpClient }) => {
  try {
    await httpClient.post('/clockin')
    return 'OK'
  } catch (e) {
    return 'ERROR'
  }
}

const clockInRequiredGPS = async ({ gpsClient, httpClient }) => {
  try {
    const location = await gpsClient()
    await httpClient.post('/clockin', location)
    return 'OK'
  } catch (e) {
    return 'ERROR'
  }
}

const buildFailingHTTPClient = () => ({
  post: jest.fn().mockImplementation(() => Promise.reject())
})

const buildSucceedingHTTPClient = () => ({
  post: jest.fn().mockImplementation(() => Promise.resolve())
})

const buildSucceedingGPSClient = (coordinates = { lat: 10, lng: 10 }) =>
  jest.fn().mockImplementation(() => Promise.resolve(coordinates))

const buildFailingGPSClient = () =>
  jest.fn().mockImplementation(() => Promise.reject())

describe('clock-in with no GPS', () => {
  it('calls clockIn API', async () => {
    const httpClient = buildSucceedingHTTPClient()

    await clockInNoGPS({ httpClient })

    expect(httpClient.post).toHaveBeenCalledWith('/clockin')
  })

  it('when http call succeeds, returns OK', async () => {
    const httpClient = buildSucceedingHTTPClient()

    const result = await clockInNoGPS({ httpClient })

    expect(result).toEqual('OK')
  })

  it('when http call fails, returns ERROR', async () => {
    const httpClient = buildFailingHTTPClient()

    const result = await clockInNoGPS({ httpClient })

    expect(result).toEqual('ERROR')
  })
})

describe('clockIn with required GPS', () => {
  describe('when GPS and HTTP succeed', () => {
    it('returns OK', async () => {
      const httpClient = buildSucceedingHTTPClient()
      const gpsClient = buildSucceedingGPSClient()

      const result = await clockInRequiredGPS({ httpClient, gpsClient })

      expect(result).toEqual('OK')
    })

    it('calls http with location', async () => {
      const coordinates = { lat: 10, lng: 10 }
      const httpClient = buildSucceedingHTTPClient()
      const gpsClient = buildSucceedingGPSClient(coordinates)

      await clockInRequiredGPS({ httpClient, gpsClient })

      expect(httpClient.post).toHaveBeenCalledWith('/clockin', coordinates)
    })
  })

  it('when GPS fails returns ERROR', async () => {
    const httpClient = buildSucceedingHTTPClient()
    const gpsClient = buildFailingGPSClient()

    const result = await clockInRequiredGPS({ httpClient, gpsClient })

    expect(result).toEqual('ERROR')
  })

  it('when GPS succeeds but HTTP fails, returns ERROR', async () => {
    const httpClient = buildFailingHTTPClient()
    const gpsClient = buildSucceedingGPSClient()

    const result = await clockInRequiredGPS({ httpClient, gpsClient })

    expect(result).toEqual('ERROR')
  })
})
