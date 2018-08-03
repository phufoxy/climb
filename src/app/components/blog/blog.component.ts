import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  slideIndex: number = 1;

  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
    this.Header();
  }
  nextTo(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  showSlides(n: number) {
    var i;
    var x = document.getElementsByClassName('img-slide') as HTMLCollectionOf<HTMLElement>;
    console.log(x + "sds");

    if (n > x.length) { this.slideIndex = 1 };
    if (n < 1) { this.slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[this.slideIndex - 1].style.display = 'block';
  }

  Header() {
    window.onscroll = function () {
      myScrolltop();
      myFunction();
    }
    $(window).on('mousewheel', function () {
      $('html,body').stop();
    });

    $(window).scroll(function (e) {
      if ($(this).scrollTop() > 100) {
        $('.upscroll').fadeIn();
      } else {
        $('.upscroll').fadeOut();
      }
    });

    $('#upscroll').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 2000);
      return false;
    });

    //
    var header = document.getElementById('header');
    // console.log(header.nodeType);
    var sticky = header.offsetTop;

    function myScrolltop() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("upscroll").style.display = "block";
      } else {
        document.getElementById("upscroll").style.display = "none";
      }
    }
    hiddenDiv("#hero .description", 600);
    hiddenDiv("#our-address", 600);

    function myFunction() {
      hiddenDiv("#business .card", 600);
      hiddenDiv("#boxes", 800);
      hiddenDiv("#our-experties .card", 700);

    }
    function hiddenDiv(element, n) {
      let x_boxes = $(element).position();
      let number = Number(x_boxes.top - n);
      var x = document.body.scrollTop || document.documentElement.scrollTop;
      if (x > number) {
        $(function () {
          setTimeout(function () {
            $(element).removeClass('hidden');
          }, 500)
        })
      }
    }
  }
}
