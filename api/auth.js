export default function handler(req, res) {
  const { host } = req.headers;
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirectUrl = `${protocol}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUrl,
    scope: 'repo,user',
    state: Math.random().toString(36).substring(2),
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
