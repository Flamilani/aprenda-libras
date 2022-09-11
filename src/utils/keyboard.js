export function handleKeyDown(event) {
    // We replaced the native event with the synthetic keyboard event
    const key = event.keyCode; 
    console.log(event.key, key);
    const coded = '';
    switch (key) {
      case '65':
          console.log('a');
          coded = 'https://www.libras.com.br/ct__images-fixed/thumbnail-menu/menu-alfabeto-manual.png';
          
        break;
      case 'Tab':
          console.log('Tab');
          console.log(key);
        break;
      case 'KeyA':
          console.log('KeyA');
        break;
      case 'Numpad4':
          console.log('Numpad4');
        break;
      default:
      //custom logic  
    }
  }