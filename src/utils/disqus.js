export const disqus_config = function(location, identifier) {
  this.page.url = location;
  this.page.identifier = identifier;
};

export const initDisqusScript = function() {
  const d = document;
  const s = d.createElement('script');

  s.src = 'https://tylerreckart.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());

  (d.head || d.body).appendChild(s);
};