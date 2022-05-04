import { getProfile } from './github.service.js';

const profile = await getProfile('jquirossoto');
console.info(`Profile: ${JSON.stringify(profile)}`);
