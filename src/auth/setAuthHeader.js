/* eslint-disable no-param-reassign, camelcase */

export default function setAuthHeader({ access_token, axios }) {
  axios.defaults.headers.common.Authorization = `Bearer ${access_token.replace(/"/g, '')}`;
}