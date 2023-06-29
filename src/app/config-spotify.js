
export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
export const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
export const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

export async function redirectToAuthCodeFlow() {
  var state = generateRandomString(16);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:3000");
  params.append("scope", "user-read-private user-read-email user-library-read user-follow-read user-read-currently-playing ");
  params.append("state", state);

  if (typeof window !== "undefined") {
    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }
}

function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


export async function getAccessToken(code) {
  const params = new URLSearchParams();
  // params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refreshToken);
  params.append("code", code)
  params.append("redirect_uri", "http://localhost:3000")
  
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      body: params,
      cache: "reload",
    }).then(res => res.json());
  return result;
};

export async function FetchSavedAlbums(token) {
  const savedAlbums = await fetch("https://api.spotify.com/v1/me/albums?limit=5", { headers: { "Authorization": `Bearer ${token}`,"Content-Type": "application/x-www-form-urlencoded" } }).then(res => res.json());

  return savedAlbums;;  
}