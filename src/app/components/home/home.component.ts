import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.Header();
  }
  Header() {
    window.onscroll = function () {
      myScrolltop();
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
  }
}
