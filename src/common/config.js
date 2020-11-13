const CLIENT_ID = 'dlvoUxSuBMfJQggL9rfM8GZFQ1tdJ1rvvN5oON0m';
const CLIENT_SECRET =
  'gJFeVi1LbwhJvJcentX3yN8kyLXqqpa364EfoZdQ4z5G8kiYzveqGSGcCNE6aAuWLOyI3fBNA14cTpTZzchWV1e7YH2OE5CfsPBzinTOZtBY1t9UXKjRkferBAvBrmRH';

const FILENAME_PREFIX = 'bloodglucose_samples';
const REDIRECTOR_BASE = 'fluapp://authorize';
const OPEN_HUMANS_BASE = 'https://www.openhumans.org/';

const OAUTH_URL = `${OPEN_HUMANS_BASE}direct-sharing/projects/oauth2/authorize/?client_id=${CLIENT_ID}&response_type=code&redirect_uri=fluapp://authorize`;

const I18N = {
  ERROR_TITLE: 'Error',
  AUTHENTICATION_ERROR: 'An authentication error occurred. Please login again.',
  GENERIC_ERROR: 'An error occurred, please try again later.',
  LOGIN: 'LOGIN',
  UPLOAD_DATA: 'UPLOAD DATA',
  UPLOAD_SUCCESS: 'DATA UPLOAD SUCCESS',
  UPLOAD_ANOTHER: 'Upload another one',
  PRIVACY_POLICY_TEXT:
    'This application is designed to allow you to upload your heart rate and resting heart rate data from your local Apple Health store on your phone to the Open Humans platform. The platform is run by the 501(c)(3), non-profit Open Humans Foundation. You can read their full terms of service for Open Humans',
};

const PRIVACY_POLICY_URL = 'https://www.openhumans.org/terms/';

export {
  OAUTH_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECTOR_BASE,
  OPEN_HUMANS_BASE,
  I18N,
  FILENAME_PREFIX,
  PRIVACY_POLICY_URL,
};
