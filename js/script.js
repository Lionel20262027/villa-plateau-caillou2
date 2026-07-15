// Ouverture simple des images en plein écran
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const w = window.open('');
    w.document.write(`
      <title>Photo</title>
      <body style="margin:0;background:black;display:flex;justify-content:center;align-items:center;height:100vh;">
        <img src="${img.src}" style="max-width:100%;max-height:100%;">
      </body>
    `);
  });
});