import Fingerprint2 from 'fingerprintjs2';

const hash = (components: any[]) =>
  Fingerprint2.x64hash128(components.map(component => component.value).join(''), 31);

export const getFingerprintHash = async () => hash(await Fingerprint2.getPromise());
