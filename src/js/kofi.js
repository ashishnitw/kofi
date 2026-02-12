// Kofi UI Library
(function(global) {
  'use strict';

  const Kofi = {
    version: '0.0.1',
    
    init: function() {
      console.log('Kofi UI Library v' + this.version + ' initialized');
    },
    
    button: function(element) {
      if (element) {
        element.classList.add('kofi-btn');
      }
    },
    
    card: function(element) {
      if (element) {
        element.classList.add('kofi-card');
      }
    }
  };

  // Export for different module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Kofi;
  } else {
    global.Kofi = Kofi;
  }
})(typeof window !== 'undefined' ? window : global);
