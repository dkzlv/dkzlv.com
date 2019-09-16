import Fingerprint2 from 'fingerprintjs2'

const hash = components =>
  Fingerprint2.x64hash128(
    components.map(component => component.value).join(''),
    31,
  )

const getFingerprintHash = async () => hash(await Fingerprint2.getPromise())

export default getFingerprintHash
