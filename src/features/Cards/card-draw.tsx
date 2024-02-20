import * as THREE from "three"

export async function createCardTexture(): Promise<THREE.Texture> {
    return new Promise<THREE.Texture>((resolve, reject) => {
      // Load the card background texture
      const cardBackgroundUrl = "https://cool-down-textures.s3.us-west-2.amazonaws.com/cards/BuildingCard.png";
      const text = "New Card Text"; // Example dynamic text
  
      const cardTexture = new THREE.TextureLoader().load(cardBackgroundUrl, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace; 
        const canvas = document.createElement('canvas');
        
        // Safely attempt to get the 2D context
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Unable to obtain 2D context from canvas'));
          return;
        }
  
        // Proceed with the rest of your function now that `context` is confirmed to be non-null
        canvas.width = texture.image.width;
        canvas.height = texture.image.height;
  
        // Draw the background texture onto the canvas
        context.drawImage(texture.image, 0, 0, canvas.width, canvas.height);
  
        // Add text on top of the background
        context.font = '24px Arial';
        context.fillStyle = '#000000'; // Adjust text color as needed
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
  
        // Create a new texture from the canvas
        const cardTexture = new THREE.Texture(canvas);
        cardTexture.needsUpdate = true;
        cardTexture.colorSpace = THREE.SRGBColorSpace; 
        resolve(cardTexture);
  
      }, undefined, (error) => reject(error));
      //
      
    });
  }