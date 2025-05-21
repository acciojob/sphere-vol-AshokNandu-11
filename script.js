function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radiusInput = document.getElementById("radius");
      const volumeOutput = document.getElementById("volume");
      
      const r = parseFloat(radiusInput.value);
      
      if (isNaN(r) || r < 0) {
        //alert("Please enter a valid positive radius.");
        volumeOutput.value = "";
        return;
      }
      
      const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      volumeOutput.value = volume.toFixed(2);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
