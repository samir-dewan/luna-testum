export default function darkenColour(hex: string): string {
    // Remove the "#" character if it exists
    hex = hex.replace(/^#/, '');
  
    // Parse the hex color into RGB components
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    // Calculate the darker color by reducing each RGB component with a fixed factor
    const darkerR = Math.max(0, Math.round(r * 0.8));
    const darkerG = Math.max(0, Math.round(g * 0.8));
    const darkerB = Math.max(0, Math.round(b * 0.8));
  
    // Convert the darker RGB components back to hex
    const darkerHex =
      '#' +
      darkerR.toString(16).padStart(2, '0') +
      darkerG.toString(16).padStart(2, '0') +
      darkerB.toString(16).padStart(2, '0');
  
    return darkerHex;
  }