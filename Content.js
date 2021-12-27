switch (window.location.hostname) {
  case "www.youtube.com":
    document.body.innerHTML =
      '<div style="text-align: center; font-size: 80px; color: white;">Youtube can wait ! Your assignments will not !</div>';
    break;
  case "www.facebook.com":
    document.body.innerHTML = `<div style="text-align: center; font-size: 80px; color: white;">Face your TEXTBOOK !</div>`;
    break;
  case "www.netflix.com":
    document.body.innerHTML =
      '<div style="text-align: center; font-size: 80px; color: white;">Not the time to binge-watch movie ! Maybe binge-complete your work?</div>';
    break;
  case "discord.com":
    document.body.innerHTML =
      '<div style="text-align: center; font-size: 80px; color: white;">Do your work !!</div>';
    break;
  case "www.spotify.com":
    document.body.innerHTML =
      '<div style="text-align: center; font-size: 80px; color: white;">I know you will end up jamming to these songs and get no work done !</div>';
    break;
}
