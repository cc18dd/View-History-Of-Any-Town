
        // Function to check if the user is on a mobile device
        function isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }

        // Check if the user is on a mobile device and load the appropriate CSS file
        if (isMobileDevice()) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'mobile.css'; // Path to your mobile CSS file
            document.getElementsByTagName('head')[0].appendChild(link);
        }
          else
        {
          var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style.css'; // Path to your mobile CSS file
            document.getElementsByTagName('head')[0].appendChild(link);
        }
   
