export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiry = payload.exp * 1000;
    console.log(expiry)
    return Date.now() > expiry;
  } catch (e) {
    return true;
  }
}