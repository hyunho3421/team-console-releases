(() => {
  'use strict';
  const targets = [
    { button: document.getElementById('download'), suffix: 'x64-setup.exe' },
    { button: document.getElementById('download-macos'), suffix: 'universal.dmg' },
  ].filter(({ button }) => button);
  const repository = 'hyunho3421/team-console-releases';
  let pending;
  let checkedAt = 0;

  async function latestInstaller() {
    if (pending) return pending;
    if (Date.now() - checkedAt < 60000) return;
    pending = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      try {
        const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer' });
        if (!response.ok) return;
        const release = await response.json();
        if (release.draft || release.prerelease || !/^v\d+\.\d+\.\d+$/.test(release.tag_name)) return;
        const version = release.tag_name.slice(1);
        if (!Array.isArray(release.assets)) return;
        for (const { button, suffix } of targets) {
          const name = `TeamConsole_${version}_${suffix}`;
          const expected = `https://github.com/${repository}/releases/download/${release.tag_name}/${name}`;
          const asset = release.assets.find(item => item.name === name && item.state === 'uploaded' && item.browser_download_url === expected);
          if (asset) {
            button.href = expected;
            button.dataset.version = version;
            const label = button.querySelector('[data-version-label]');
            if (label) label.textContent = version;
          }
        }
        checkedAt = Date.now();
      } catch {
        // The verified installer in the HTML remains usable without API access or JS.
      } finally {
        clearTimeout(timeout);
      }
    })().finally(() => { pending = null; });
    return pending;
  }

  void latestInstaller();
  for (const { button } of targets) {
    button.addEventListener('pointerenter', () => void latestInstaller());
    button.addEventListener('focus', () => void latestInstaller());
    button.addEventListener('click', async event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      if (button.getAttribute('aria-busy') === 'true') return;
      button.setAttribute('aria-busy', 'true');
      await latestInstaller();
      window.location.assign(button.href);
      button.removeAttribute('aria-busy');
    });
  }
})();
