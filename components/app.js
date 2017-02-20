import Footer from '../components/footer'
import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'

const $ = require('jquery');
global.$ = $;
global.jQuery = $;

export default class App extends React.Component {
  componentDidMount() {
    $(document).ready(function () {

      function checkHeaderLocation() {
        var top_of_object = $('.page--body').offset().top - 72;
        var top_of_window = $(window).scrollTop();

        return top_of_object < top_of_window;
      }

      function fadeHeaderIn() {
        $(".header--main").addClass("logo-dark");
      }

      function fadeHeaderOut() {
        $(".header--main").removeClass("logo-dark");
      }

      function isContentVisible(element) {
        var bottom_of_object = element.offset().top + element.outerHeight() - 400;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        return bottom_of_window > bottom_of_object;
      }


      $(window).scroll(function () {

        if (checkHeaderLocation()) {
          fadeHeaderIn();
        } else {
          fadeHeaderOut();
        }

        $('.hidden').each(function (i) {
          if (isContentVisible($(this))) {
            $(this).addClass("animate-content");
          }
        });

      });


      // Init
      setTimeout(function() {
        if (checkHeaderLocation()) {
          fadeHeaderIn();
        } else {
          fadeHeaderOut();
        }

        $('.hidden').each(function (i) {
          if (isContentVisible($(this))) {
            $(this).addClass("animate-content");
          }
        });
      }, 750);

      // Hero
      var scene = $('.hero--scene');
      scene.parallax({
        invertX: false,
        limitY: 0
      });


    });
  }

  render() {
    return ( <div>
        <Head />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
