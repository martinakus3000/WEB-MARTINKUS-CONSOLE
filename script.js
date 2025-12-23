function openSection(section) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");

  const container = document.getElementById("section-content");

  let text = "";
  switch (section) {
    case "xarxa":
      text = "<h2>🌐 Xarxa Segura</h2><p>Accedeix a eines i configuracions de xarxa de manera segura i fàcil.</p>";
      break;
    case "sistema":
      text = "<h2>🖥️ Sistema</h2><p>Consulta informació del sistema i optimitza el teu dispositiu.</p>";
      break;
    case "utilitats":
      text = "<h2>🧰 Utilitats</h2><p>Eines útils per al teu dia a dia digital.</p>";
      break;
    case "claus":
      text = "<h2>🔐 Generador de Claus</h2><p>Crea contrasenyes segures amb un sol clic!</p>";
      break;
    case "gamer":
      text = "<h2>🎮 Zona Gamer</h2><p>Jocs i curiositats del món gamer! 🚀</p>";
      break;
    case "navegador":
      text = `<h2>🌍 Navegador</h2>
      <p>Obre els teus webs favorits:</p>
      <ul>
        <li><a href='https://martinakus.wordpress.com/' target='_blank'>Martinakus World</a></li>
        <li><a href='https://elracodart.wordpress.com/' target='_blank'>El Racó d'Art</a></li>
        <li><a href='https://www.youtube.com/@MARTINAKUSWORLD' target='_blank'>Canal YouTube</a></li>
      </ul>`;
      break;
    case "temps":
      text = "<h2>⏱️ Temporitzador</h2><p>Pomodoro i temporitzadors per estudiar o jugar amb concentració ⏳</p>";
      break;
    case "ajuda":
      text = "<h2>⌨️ Ajuda Ràpida</h2><p>Consulta atajos i trucs per dominar la consola 💡</p>";
      break;
    case "ia":
      text = "<h2>🤖 IA Martinakus</h2><p>Versió web intel·ligent de la teva IA Offline! (En construcció 🧠)</p>";
      break;
    case "seguretat":
      text = "<h2>🧪 Laboratori Seguretat</h2><p>Experimenta amb seguretat i aprèn bones pràctiques digitals 🔒</p>";
      break;
    case "programacio":
      text = "<h2>👨‍💻 Aprendre Programació</h2><p>Tutorials senzills i exemples per convertir-te en un crack del codi! 💥</p>";
      break;
    default:
      text = "<h2>🚀 Martinakus Console</h2><p>Selecciona una opció del menú per començar.</p>";
  }

  container.innerHTML = text;
}

function goBack() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("content").classList.add("hidden");
}

function closeApp() {
  alert("👋 Adeu bro! Ens veiem aviat 😄");
  location.reload();
}
