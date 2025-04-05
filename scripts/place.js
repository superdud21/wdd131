function calculateWindChill(temp, windSpeed) {
    return (
      35.74 + 0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const temp = 40;
    const windSpeed = 10;
  
    const chill = (temp <= 50 && windSpeed > 3)
      ? `${calculateWindChill(temp, windSpeed)} °F`
      : "N/A";
  
    document.getElementById("windChill").textContent = chill;
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  });
  