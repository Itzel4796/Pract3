
    function openPhotoSwipe() {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        var items = [
            {
                src: 'https://programacion.net/files/article/20160722020737_python-logo.png',
                w: 1487,
                h: 645
            },
            {
                src: 'https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/04cfb6ae32e02c045357dc789f7202a2/java_yoko.png',
                w: 300,
                h: 170
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
                w: 1200,
                h: 1349
            },
            {
                src: 'https://i.blogs.es/544e7d/650_1000_javascript_logo/450_1000.png',
                w: 300,
                h: 300
            },
            {
                src: 'https://www.androidpolice.com/wp-content/uploads/2017/05/nexus2cee_Android-Studio-3.0-hero_thumb.png',
                w: 728,
                h: 409
            }
        ];
        
        // define options (if needed)
        var options = {
                // history & focus options are disabled on CodePen        
            history: false,
            focus: false,

            showAnimationDuration: 0,
            hideAnimationDuration: 0
            
        };
        
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

    };