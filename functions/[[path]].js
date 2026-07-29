export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Map your custom domains to their specific pages
  const domainMap = {
    'finops-app.com': '/finops',
    'governance-app.com': '/governance',
    'customer-experience-app.com': '/customer-experience'
  };

  // Check if the requested domain is one of our mapped domains (ignoring www.)
  const targetPath = domainMap[url.hostname] || domainMap[url.hostname.replace('www.', '')];

  if (targetPath) {
    // If they visit the root of the domain, serve the specific page for that domain
    if (url.pathname === '/') {
      url.pathname = targetPath;
    } 
    
    // Fetch the internal file and serve it directly to the user
    return context.env.ASSETS.fetch(url);
  }

  // Fallback for asset fetching
  return context.env.ASSETS.fetch(context.request);
}
