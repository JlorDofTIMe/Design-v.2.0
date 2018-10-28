
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
  var menuItem = '.' + $(e.currentTarget).attr('date-link')

  $('html, body').animate({
    scrollTop: $(menuItem).offset().top
  }, 'slow')   
}

const toggleNavbar = () => {
  const $navbar = $('.navbar')
  let SCROLL_POSITION = $('.navbar').offset().top

  return () => {
    if($navbar.offset().top > SCROLL_POSITION && $navbar.offset().top > $navbar.height()) {
      $navbar.css('opacity', '0')
      $navbar.css('transform', 'translateY(-100%)')
      SCROLL_POSITION = $navbar.offset().top
    }
    
    else if ($navbar.offset().top < SCROLL_POSITION) {
      $navbar.css('opacity', '1')
      $navbar.css('transform', 'translateY(0%)')
      SCROLL_POSITION = $navbar.offset().top
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