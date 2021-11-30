import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {addListeners} from './modules/document-listeners';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
addListeners();
