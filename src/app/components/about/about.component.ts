import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    this.Header();
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
