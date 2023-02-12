/** @type {HTMLAnchorElement[]} */
const as = document.querySelectorAll('a.hnuser');

for (const a of as) {
  a.addEventListener(
    'mouseover',
    async function () {
      const url = new URL(a.href);
      const id = url.searchParams.get('id');

      const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
      const { about, created, karma } = await response.json();

      a.title = `${id} (${karma} karma | ${new Date(created * 1000).toLocaleDateString()})`;
      if (about) {
        // Replace `<p>` with `\n` lest `textContent` prints no line breaks
        const document = new DOMParser().parseFromString(about.replaceAll(/<p>/g, '\n'), 'text/html');
        a.title += '\n\n' + document.documentElement.textContent;
      }
    },
    { once: true }
  );
}
