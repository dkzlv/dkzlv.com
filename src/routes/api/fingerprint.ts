import type { RequestHandler } from '@sveltejs/kit';
import type { Headers } from '@sveltejs/kit/types/helper';

import { CronJob } from 'cron';

import { del, hget, hset } from '$core/redis';
import { nanoid } from 'nanoid';

export const get: RequestHandler<unknown> = async req => {
  const message = await getFingerprint({
    fingerprint: req.query.get('fingerprint') || '',
    ip: getIpFromHeaders(req.headers),
  });

  return { body: { message } };
};

export const post: RequestHandler<unknown, { fingerprint: string; message: string }> =
  async req => {
    await setFingerprint({
      fingerprint: req.body.fingerprint,
      ip: getIpFromHeaders(req.headers),
      message: req.body.message.slice(0, 200),
    });

    return { status: 200, body: {} };
  };

const fingerprintKey = 'fingerprint';
async function getFingerprint({
  fingerprint,
  ip,
}: {
  fingerprint: string;
  ip: string;
}): Promise<string> {
  let res = await hget(fingerprintKey, fingerprint);
  if (!res) res = await hget(fingerprintKey, ip);

  return res;
}

async function setFingerprint({
  fingerprint,
  ip,
  message,
}: {
  fingerprint: string;
  ip: string;
  message: string;
}): Promise<any> {
  return Promise.all([
    hset(fingerprintKey, fingerprint, message),
    hset(fingerprintKey, ip, message),
  ]);
}

function getIpFromHeaders(headers: Headers): string {
  // Using unique IP so it does not mangle with the results
  return headers['x-forwarded-for'] || nanoid();
}

function flushFingerprints() {
  return del(fingerprintKey);
}

const flushFingerprintsJob = new CronJob('* * 0 * * *', flushFingerprints);
flushFingerprintsJob.start();
