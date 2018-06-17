(( ) => {
    const mobileWidth = 680;

    /* Scroll action*/
    const addMenuBackground = () => {
        const pageWidth = window.innerWidth;
        const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const navigation = document.querySelector ("header nav");

        if (pageWidth > mobileWidth && navigation) {
            boddyOffset > 0 ? navigation.classList.add("agd-nav-fixed") : navigation.classList.remove("agd-nav-fixed");
        } else if (pageWidth > mobileWidth && mobileNavigation) {
            navContainer.insertAdjacentHTML("beforeend", mobileNavigation);
        }
    };

    /* Responsive menu toggle*/
    const reorderResponsiveMenu = () => {
      const pageWidth = window.innerWidth;
      const navContainer = document.querySelector("header nav .agd-container");
      const navigation = document.querySelector("header nav .agd-navigation");
      const mobileNavigation = document.querySelector("body > .agd-navigation");

      if (pageWidth <= mobileWidth) {
          document.body.insertAdjacentElement("afterbegin", navigation);
      } else if (pageWidth > mobileWidth && mobileNavigation) {
          navContainer.insertAdjacentElement("beforeend", mobileNavigation);
      }
    };

    const mobileMenuToggle = () => {
        const menuToggle = document.querySelector(".agd-nav-toggle");

        menuToggle.addEventListener("click", () => {
            const mobileNavigation = document.querySelector("body > .agd-navigation");

            mobileNavigation.classList.toggle("agd-navigation-opened");
        })
    };

    const onNavItemClick = () => {
        const  navItemList = document.querySelectorAll(".agd-section-link");
        const navItems = [...navItemList];
        navItems.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                const sectionId = event.target.getAttribute("href") || event.target.dataset.href ;
                scrollToSection(sectionId);
            })
        })
    };

    const scrollToSection = sectionId => {
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth;

        if (sectionId !== "#") {
            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;

        } else {
            sectionPosition = 0;
        }

        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionPosition
        })
    };

    /* Testimonials action */
    const onTestimonialChange = () => {
        let firstChild, lastChild;
        const prevArrow = document.querySelector("#agd-testimonials-prev");
        const nextArrow = document.querySelector("#agd-testimonials-next");
        const testimonials = document.querySelector(".agd-testimonials ul");
        
        document.addEventListener("click", () => {
            if (event.target === prevArrow) {
                lastChild = testimonials.lastElementChild;
                testimonials.insertAdjacentElement("afterbegin", lastChild);

            } else  if (event.target === nextArrow) {
                firstChild = testimonials.firstElementChild;
                testimonials.insertAdjacentElement("beforeend", firstChild);
            }
        })
    };

    /* Gallery section */
    const onGalleryImageClick = () => {
        const galleryImageList = document.querySelectorAll("#agd-gallery li");
        const galleryImages = [...galleryImageList];

        galleryImages.forEach(image => {
            image.addEventListener("click", event => {
                galleryImageOpen(event.target);
            })
        })
    };

    const galleryImageOpen = image => {
        const imageSrc = image.getAttribute("src");
        const openedImage = `<div class='agd-backdrop'><img src='${imageSrc}' alt='' />
		                    <span class="agd-backdrop-close">X</span></div>`;
        document.body.insertAdjacentHTML("beforeend", openedImage);
        galleryImageClose();
    };

    const galleryImageClose = () => {
        const  closeButton = document.querySelector(".agd-backdrop-close");

        closeButton.addEventListener("click", () => {
            const backdrop = document.querySelector(".agd-backdrop");
            backdrop.remove();
        })
    };

    window.addEventListener("scroll", () => {
        addMenuBackground();
    });

    window.addEventListener("resize", () => {
        reorderResponsiveMenu();
    });

    onNavItemClick();
    mobileMenuToggle();
    onTestimonialChange();
    onGalleryImageClick();

})();