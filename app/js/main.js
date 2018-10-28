
const slickConfig = () => {
  $('.slider').slick({
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  })

  $('.design__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
          breakpoint: 768, 
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 576, 
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  })
}

const showItemDescription = e => {
  // setting a class 'active' for finding clicked item 
  $(e.currentTarget).addClass('active')

  $('.active > .design__descWrap')
    .toggleClass('design__descWrap-show')

  $('.active > .design__descWrap  > .design__descItem')
    .toggleClass('design__descItem-active')

  $(e.currentTarget).removeClass('active')
}


const scrollToSection = e => {
  e.preventDefault()

  const menuItem = '.' + $(e.currentTarget).attr('date-link')
  let coordinates = $(menuItem).offset().top
  
  const sectionPosition = $(menuItem).offset().top
  const currentScrollPos = $(window).scrollTop()

  if(currentScrollPos > sectionPosition) 
    coordinates -= $('.navbar').height()

  $('html, body').animate({
    scrollTop: coordinates
  }, 'slow')   
}

const toggleNavbar = () => {
  const $navbar = $('.navbar')
  let scrollPosition = $('.navbar').offset().top

  const animateNavBar = (opacity, trsY) => {
    $navbar.css('opacity', `${opacity}`)
    $navbar.css('transform', `translateY(${trsY}%)`)
  }

  return () => {
    if($navbar.offset().top > scrollPosition && $navbar.offset().top > $navbar.height()) {
      animateNavBar(0, -100)
      scrollPosition = $navbar.offset().top
    }
    
    else if ($navbar.offset().top < scrollPosition) {
      animateNavBar(1, 0)
      scrollPosition = $navbar.offset().top
    }
  }
}

$(document).ready(() => {
  slickConfig()

  $('.design__sliderItem')
    .click(showItemDescription)

  $('[date-link]')
    .click(scrollToSection)

  $(window)
    .on('scroll', toggleNavbar())
})