const navBtn = document.querySelector(
	".nav-toggle"
);
const linksContainer =
	document.querySelector(
		".links-container"
	);
const navLinks =
	document.querySelector(".links");

navBtn.addEventListener(
	"click",
	function () {
		const containerHeight =
			linksContainer.getBoundingClientRect()
				.height;
		const linksHeight =
			navLinks.getBoundingClientRect()
				.height;
		if (containerHeight === 0) {
			linksContainer.style.height = `${linksHeight}px`;
		} else {
			linksContainer.style.height = 0;
		}
		console.log(
			linksContainer.style.height
		);
	}
);

// show contact
const contactLink =
	document.querySelector(".Contact");
const contactDemo =
	document.getElementById("contact");
const closeBtn = document.querySelector(
	".close-btn"
);

contactLink.addEventListener(
	"click",
	function () {
		contactDemo.style.left = "0px";
	}
);
closeBtn.addEventListener(
	"click",
	function () {
		contactDemo.style.left = "-900rem";
	}
);

// FAG section
let headElement = document.querySelectorAll('article');
const btns = document.querySelectorAll('.question-btn')


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let target_btn = e.currentTarget.parentElement.parentElement;

        // function to close already opened block when another button is clicked
        headElement.forEach(function(item){
            if(item !== target_btn){
                item.classList.remove('show-text')
            }
        })
        
        target_btn.classList.toggle('show-text')
        
    })
})


// initialize swipper
const swiper = new Swiper('.all-reviews', {
	

	loop: true,
  
	
	pagination: {
	  el: '.swiper-pagination',
	},
  
	
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });