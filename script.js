document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector("#image-container img");
  const textElements = document.querySelectorAll(".text");
  const root = document.documentElement;

  function updateStyles() {
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const textLength = "isfshax".length; // Adjust this to your word
    const baseSizeAdjustment = 1.6; // Adjust this value to fine-tune the text size
    const fontSize = (imageWidth / textLength) * baseSizeAdjustment + "px";
    
    const nandWidth = imageWidth / 3.0 + "px";
    const nandLeft = (imageWidth * 0.9) + "px";
    const nandTop = (imageHeight * 1.1) + "px";
    
    const bodyWidth = imageWidth / 1.5 + "px";
    
    const bodyLeft = image.offsetLeft + "px"; 
    const headerBelowTop = (imageHeight) * 2 + "px";
    const bodyBelowTop = (imageHeight) * 1.05 + "px";
    root.style.setProperty("--body-left", bodyLeft); 
    root.style.setProperty("--header-below-top", headerBelowTop);
    root.style.setProperty("--body-below-top", bodyBelowTop);
    
    const dlSize = (imageWidth / "Download".length) * 0.5 + "px";
    root.style.setProperty("--header-size", dlSize);
    
    const bodySize = (imageWidth / "isfshax is a coldboot boot1 exploit for the Wii U".length)*1.45 + "px";
    root.style.setProperty("--body-size", bodySize);

    // Calculate margin-top based on both viewport height and width
    const scalingFactor = 0.05; // Adjust this value to fine-tune the scaling
    const marginTop = imageHeight * 0.3 + "px";

    // Calculate the position of the glowing dot relative to the image
    const dotLeft = (imageWidth * 0.293) + "px"; // Adjust this multiplier as needed
    const dotTop = (imageHeight * 0.682) + "px"; // Adjust this multiplier as needed
    
    // Calculate the dot size based on the image size
    const dotSize = (imageWidth * 0.01) + "px";
    
    // Calculate the dot size based on the image size
    const shineSize = (imageWidth * 0.04) + "px";
    
    // Calculate the position of the text relative to the image
    const textLeft = (imageWidth * 0.95) + "px"; // Adjust this multiplier as needed
    const textTop = (imageHeight * 1.95) + "px"; // Adjust this multiplier as needed
    
    // Configure body text container
    const bodyTextWidth = imageWidth * 0.7 + "px"; // 40% of image width
    const bodyTextHeight = imageHeight * 0.5 + "px"; // 50% of image height
    const bodyTextFontSize = imageWidth * 0.02 + "px"; // 2% of image width

    root.style.setProperty("--body-text-width", bodyTextWidth);
    root.style.setProperty("--body-text-height", bodyTextHeight);
    root.style.setProperty("--body-text-font-size", bodyTextFontSize);

    root.style.setProperty("--font-size", fontSize);
    root.style.setProperty("--margin-top", marginTop);
    root.style.setProperty("--dot-left", dotLeft);
    root.style.setProperty("--dot-top", dotTop);
    root.style.setProperty("--dot-size", dotSize);
    root.style.setProperty("--shine-size", shineSize);
    root.style.setProperty("--text-left", textLeft);
    root.style.setProperty("--text-top", textTop);
    root.style.setProperty("--nand-width", nandWidth);
    root.style.setProperty("--nand-left", nandLeft);
    root.style.setProperty("--nand-top", nandTop);
  }

  // Update styles on load and resize
  updateStyles();
  window.addEventListener("resize", updateStyles);
});
