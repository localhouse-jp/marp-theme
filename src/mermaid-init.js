window.addEventListener('load', () => {
  if (!window.mermaid) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: '#003366',
      primaryTextColor: '#ffffff',
      primaryBorderColor: '#0055A4',
      lineColor: '#0055A4',
      nodeTextColor: '#ffffff'
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      padding: 15
    },
    fontFamily: 'LINE Seed JP, Helvetica Neue, Arial, sans-serif',
    fontSize: 12
  });
  setTimeout(() => {
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    setTimeout(() => {
      document.querySelectorAll('.mermaid text, .mermaid .nodeLabel, .mermaid tspan').forEach(el => {
        el.setAttribute('fill', '#ffffff');
        el.style.fill = '#ffffff';
        el.style.color = '#ffffff';
      });
    }, 100);
  }, 100);
});