<?php

function getUrl() {
    if (!empty($_SERVER['REQUEST_URI'])) {
        return $url = trim($_SERVER['REQUEST_URI'], '/');
    }
}

$hideTopMenu = preg_match("~photo~", getUrl()) ? false : true;

?>


<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="日本人の繊細さにアダルト、セクシーを掛け合わせたブラックモードスタイルを提案するアパレルブランド「SHOKI JOETAKI」。公式サイトでは、最新のコレクションやニュース、ブログ、取り扱い店舗情報等を掲載しています。">
    <meta name="keywords" content="SHOKI JOETAKI, 上瀧　翔貴, black, fashion">


    <!-- Bootstrap Core CSS -->
<!--    <link href="css/bootstrap.min.css" rel="stylesheet">-->

    <!-- css -->
    <link rel="stylesheet" href="css/style.css" media="all">

<!--    <!-- favicon -->
<!--    <link rel="apple-touch-icon" sizes="57x57" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-57x57.png">-->
<!--    <link rel="apple-touch-icon" sizes="60x60" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-60x60.png">-->
<!--    <link rel="apple-touch-icon" sizes="72x72" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-72x72.png">-->
<!--    <link rel="apple-touch-icon" sizes="76x76" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-76x76.png">-->
<!--    <link rel="apple-touch-icon" sizes="114x114" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-114x114.png">-->
<!--    <link rel="apple-touch-icon" sizes="120x120" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-120x120.png">-->
<!--    <link rel="apple-touch-icon" sizes="144x144" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-144x144.png">-->
<!--    <link rel="apple-touch-icon" sizes="152x152" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-152x152.png">-->
<!--    <link rel="apple-touch-icon" sizes="180x180" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/apple-touch-icon-180x180.png">-->
<!--    <link rel="icon" type="image/png" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/favicon-32x32.png" sizes="32x32">-->
<!--    <link rel="icon" type="image/png" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/android-chrome-192x192.png" sizes="192x192">-->
<!--    <link rel="icon" type="image/png" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/favicon-96x96.png" sizes="96x96">-->
<!--    <link rel="icon" type="image/png" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/favicon-16x16.png" sizes="16x16">-->
<!--    <link rel="manifest" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/manifest.json">-->
<!--    <link rel="mask-icon" href="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/safari-pinned-tab.svg" color="#5bbad5">-->
<!--    <meta name="msapplication-TileColor" content="#da532c">-->
<!--    <meta name="msapplication-TileImage" content="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/favicons/mstile-144x144.png">-->
<!--    <meta name="theme-color" content="#ffffff">-->

    <!-- ogp -->
    <meta property="fb:admins" content="100003337574412">
    <meta property="og:title" content="Ezequiel Gomez - short site description">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://ezequielgomez.com">

    <!--    установить OGP изображение-->
    <meta property="og:image" content="http://ezequielgomez.com/ogp-image.png">

    <meta property="og:site_name" content="Ezequiel Gomez">
    <meta property="og:description" content=" Ezequiel Gomez - Site description">

    <!-- js -->
    <script charset="utf-8" src="js/jquery.js"></script>
    <script charset="utf-8" src="js/main.js"></script>

    <!-- fotorama.css & fotorama.js. -->
    <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->

    <title>Ezequiel Gomez</title>
    <link rel="canonical" href="http://ezequielgomez.com">
</head>

<body>

<script>
//    if (!window.ga) {
//        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//            m=s.getElementsByTagName(o)[0];
//            a.async=1;a.src=g;
//            m.parentNode.insertBefore(a,m)
//        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//        ga('create', 'UA-71751530-1', 'auto');
//        ga('require', 'displayfeatures');
//    }
//    ga('send', 'pageview', window.location.pathname.replace(/^\/?/, '/') + window.location.search);
</script>

<noscript class="no-script">本サイトはJavaScriptが有効な状態にないと正常に表示されません。このメッセージが表示される場合、ブラウザの設定状況をご確認ください。</noscript>

<!--[if lt IE 10]>
<div class="under-ie9">
    <div class="under-ie9__inner">
        <h1 class="under-ie9__title"><img src="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/sj-logo-w.svg" alt="SHOKI JOETAKI"/></h1>
        <p>Excuse me, but your browser (software for Internet browsing) does not support the old version this Web site for.</p>
        <p>In older versions of the browser, making it a non-display because there may not be displayed properly.<a href="http://browsehappy.com/">Update to the latest version</a>Learn from you.</p>
    </div>
</div>
<![endif]-->

<svg class="svg-defs">
    <symbol id="sjLogo" viewBox="0 0 176.3 158">
        <path d="M104.1,83c6.5-13.5,11.4-21.8,17-30.9c1.1-1.9,4.5-7.1,5.1-7.8c4.3-5.7,10.6-12.5,14.9-14.4c7.6-3.4,36.8-12.3,35.1-23.6c-0.1-0.5-0.4-1.1-0.6-1.6c-0.2-0.5-0.6-0.9-0.9-1.4c-0.3-0.3-0.6-0.7-0.9-1c-0.7-0.6-1.5-1.1-2.3-1.5c-1.9-0.8-4-1.1-6-0.9c-0.7,0.1-1.3,0.2-2,0.4c-0.7,0.2-1.3,0.4-1.9,0.7c-0.6,0.3-1.2,0.5-1.7,0.8c-0.2,0.1-0.3,0.2-0.5,0.3c-0.6,0.3-1.2,0.7-1.8,1.1c-0.6,0.4-1.1,0.8-1.7,1.2c-0.6,0.4-1.1,0.8-1.7,1.2c-0.8,0.7-1.6,1.4-2.4,2.1c-0.7,0.6-1.3,1.3-2,2c-0.2,0.2-0.4,0.4-0.6,0.6c-0.8,0.8-1.6,1.7-2.4,2.5c-0.7,0.7-1.4,1.5-2,2.3c-0.1,0.1-0.2,0.2-0.3,0.3c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.2c-0.1,0.1-0.2,0.3-0.3,0.4c-0.7,0.9-1.3,1.7-2,2.6c-0.2,0.2-0.4,0.5-0.6,0.7c-0.5,0.6-1,1.2-1.5,1.9c-0.3,0.4-0.6,0.8-1,1.2c-0.5,0.7-2.8,3.3-3.3,3.9c-0.5,0.6-1.7,1.2-2.4,1.5c-3.9,1.9-9.7,3.8-15.4,5.9C88.5,44.6,42.2,57.8,39.2,58.6c-0.9,0.2-1.8,0.5-2.7,0.7c-2.9,0.7-19.7,4.4-20.6,4.5c-1.9,0.3-3.8,0.7-5.7,1c-1.9,0.4-3.7,0.7-5.6,1.2c-1.3,0.4-2.8,0.8-3.9,1.6c-0.7,0.6-1.2,2,0,2.3c1.6,0.5,3.5,0,5.1-0.2c3.6-0.4,39.3-5.6,40.6-5.7c1.7-0.2,3.3-0.4,5-0.6c0.8-0.1,1.5-0.2,2.3-0.2c2.9-0.3,16-2.3,18.2-2.6c4.7-0.6,8.3-1.5,8.3-1.5c-0.3-1.7-29,3.3-27.7,0.4c0-0.1,6.4-2,6.7-2.1c10.9-2.7,24.9-7.7,32.9-10.4c7.6-2.6,32.5-12.1,32.6-9.7c0.1,0.9-3.4,6.2-3.4,6.3c-3.6,5.1-7.7,12.3-9.3,14.9c-6.2,10.7-11.4,20.4-17,31.4c-1.3,2.6-2.6,5.2-3.9,7.8c-0.4,0.7-0.8,1.5-1.2,2.2c-1.3,2.3-2.9,4.4-4.7,6.3c-3.1,3.2-6.7,5.8-10.1,8.6c-0.9,0.7-1.7,1.5-2.6,2.2c-3.4,3.2-6.8,6.7-11.1,11.5c-1.7,1.9-3.4,3.9-5,6c-1.2,1.7-2.3,3.3-3.7,5.3c-0.3,0.5-2.7,4.3-3.4,6.1c-0.5,1.4-1,2.8-1.2,4.4c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.7-0.1,1.3,0,2c0,0.5,0.1,1,0.2,1.5c0.2,0.9,0.6,1.8,1.4,2.3c0.2,0.1,0.4,0.2,0.6,0.3c0.5,0.2,0.9,0.2,1.4,0.1c0.5-0.1,1-0.3,1.4-0.5c0.5-0.2,0.9-0.5,1.4-0.7c0.5-0.3,1-0.5,1.5-0.9c0.5-0.4,2.7-2.3,3.4-2.8c0.6-0.5,1.3-1.1,1.9-1.7c1.5-1.5,2.9-3.1,4.3-4.7c0.4-0.4,0.8-0.9,1.2-1.3c0.4-0.5,0.8-0.9,1.2-1.4c0.4-0.4,4-5.2,4.9-6.5c0.6-0.9,1.2-1.8,1.8-2.7c0.6-0.9,1.3-1.8,1.9-2.7c0.3-0.5,0.7-1,1-1.5c1.2-1.9,2.5-3.7,3.7-5.6c0.9-1.5,1.6-2.9,2.5-4.4c0.3-0.5,0.6-1,0.9-1.5c0.9-1.5,1.8-3.1,2.6-4.6c0.8-1.5,1.6-3,2.4-4.5c0.5-0.8,1.1-1.5,1.7-2.2c0.6-0.7,1.3-1.4,2-2.2c0.4-0.4,0.8-0.8,1.2-1.2c1.4-1.5,2.8-3,4.4-4.3c1.6-1.3,3.4-2.5,5-3.8c2.2-1.6,4.4-3.2,6.5-4.9c1.9-1.5,4-3.2,5.8-4.8c1.4-1.3,1.7-1.5,3.2-2.7l13.4-11.6c0,0-9.9,6.1-12.6,8.2c-2.7,2.1-15.1,11-18.7,13c-4.3,2.5-2.3-0.6-0.7-4C101.9,86.7,103.3,84.6,104.1,83z M146.3,22c0.2-0.4,0.4-0.8,0.6-1.2c0.3-0.5,0.7-1.1,1.1-1.6c0.4-0.5,0.8-1,1.2-1.4c0.2-0.2,0.4-0.4,0.6-0.7c0.9-1,1.9-2.1,2.8-3c0.8-0.7,1.5-1.4,2.2-2.1c0.2-0.2,0.5-0.5,0.7-0.7c0.5-0.4,0.9-0.8,1.4-1.2c0.9-0.7,1.7-1.5,2.6-2.2c0.2-0.2,0.5-0.4,0.8-0.6c0.6-0.4,1.2-0.7,1.8-1c0.6-0.3,1.3-0.5,1.9-0.7c0.4-0.1,0.8-0.2,1.1-0.3c0.4-0.1,0.7-0.1,1.1-0.1c0.3,0,0.7,0,1,0c0.3,0,0.5,0.1,0.8,0.2c0.4,0.1,0.8,0.4,1,0.7c0.3,0.3,0.6,0.7,0.7,1.1c0.1,0.3,0.1,0.7,0.1,1c0,0.5-0.1,1-0.3,1.4c-0.4,0.9-1.1,1.7-1.8,2.3c-1.4,1.1-3,2.2-4.5,3.2c-1.8,1.1-8.6,4.5-8.6,4.5c-0.7,0.4-7.5,4.3-8.3,3.4c-0.2-0.2-0.2-0.3-0.2-0.6C146.2,22.4,146.2,22.2,146.3,22z M77.2,122c-1.8,3.2-6.1,9.4-8.4,12.5c-1.1,1.5-2.3,3-3.5,4.5c-0.3,0.4-0.7,0.8-1,1.3c-1.4,1.6-2.8,3.2-4.2,4.8c-0.5,0.6-1,1.2-1.5,1.7c-0.5,0.5-0.9,1.1-1.5,1.6c-0.3,0.3-0.6,0.5-0.9,0.7c-0.1,0.1-0.6,0.3-0.7,0.2c-0.5-0.3-0.6-2.7-0.2-3.7c1.2-3.8,4.7-8.7,9.6-14.3c1.8-2,5.8-6.5,6.2-7.1C71.4,123.9,81.7,114.3,77.2,122z"/>
    </symbol>
    <symbol id="twitterIcon" viewBox="0 0 246.1 200">
        <path d="M246.1,23.7c-9.1,4-18.8,6.7-29,8c10.4-6.2,18.4-16.1,22.2-27.9c-9.8,5.8-20.6,10-32.1,12.3C198,6.1,184.9,0,170.4,0c-27.9,0-50.5,22.6-50.5,50.5c0,4,0.4,7.8,1.3,11.5C79.2,59.9,42,39.8,17.1,9.2c-4.3,7.5-6.8,16.1-6.8,25.4c0,17.5,8.9,33,22.5,42c-8.3-0.3-16.1-2.5-22.9-6.3c0,0.2,0,0.4,0,0.6c0,24.5,17.4,44.9,40.5,49.5c-4.2,1.2-8.7,1.8-13.3,1.8c-3.3,0-6.4-0.3-9.5-0.9c6.4,20.1,25.1,34.7,47.2,35.1C57.5,169.9,35.7,178,12,178c-4.1,0-8.1-0.2-12-0.7C22.3,191.6,48.9,200,77.4,200c92.9,0,143.7-76.9,143.7-143.7c0-2.2,0-4.4-0.1-6.5C230.8,42.7,239.3,33.8,246.1,23.7z"/>
    </symbol>
    <symbol id="facebookIcon" viewBox="0 0 88 169.8">
        <path d="M26,169.8v-77H0v-31h26V39.9C26,14.1,41.7,0,64.8,0C75.8,0,86,0.8,88,1.2v27l-16,0c-12.5,0-15,6-15,14.7v18.9h30.5l-3.9,31H57v77"/>
    </symbol>
    <symbol id="instagramIcon" viewBox="0 0 200 200">
        <path d="M200,22.9C200,10.3,189.7,0,177.1,0H22.9C10.3,0,0,10.3,0,22.9v154.2C0,189.7,10.3,200,22.9,200h154.2c12.7,0,22.9-10.3,22.9-22.9V22.9z M176,53.7c0,4-3.3,7.3-7.3,7.3h-23.4c-4,0-7.3-3.3-7.3-7.3V30.3c0-4,3.3-7.3,7.3-7.3h23.4c4,0,7.3,3.3,7.3,7.3V53.7z M138.9,99.4c0,21.1-17.1,38.3-38.3,38.3c-21.1,0-38.3-17.1-38.3-38.3s17.1-38.3,38.3-38.3C121.8,61.1,138.9,78.3,138.9,99.4z M177,168.9c0,4-2.8,7.1-6.8,7.1H31.1c-4,0-8.1-3.1-8.1-7.1V85h17.8c-1.2,5-1.9,9.6-1.9,14.8c0,34.1,27.6,61.6,61.7,61.6c34.1,0,61.7-27.4,61.7-61.5c0-5.2-0.7-9.9-1.9-14.9H177V168.9z"/>
    </symbol>
    <symbol id="shareIcon" viewBox="0 0 115.1 126.7">
        <path d="M95.1,86.7c-5.6,0-10.6,2.3-14.3,6l-41.5-24c0.5-1.7,0.7-3.5,0.7-5.3c0-1.9-0.3-3.6-0.7-5.3l41.5-24c3.6,3.7,8.7,6,14.3,6c11,0,20-9,20-20c0-11-9-20-20-20c-11,0-20,9-20,20c0,1.9,0.3,3.6,0.7,5.3l-41.5,24c-3.6-3.7-8.7-6-14.3-6c-11,0-20,9-20,20c0,11,9,20,20,20c5.6,0,10.6-2.3,14.3-6l41.5,24c-0.5,1.7-0.7,3.5-0.7,5.3c0,11,9,20,20,20c11,0,20-9,20-20S106.1,86.7,95.1,86.7z"/>
    </symbol>
</svg>



<div class="loading" id="js-loading">
    <p class="loading-text" id="js-opening-loading">LOADING</p>
</div>
<div class="intro" id="js-intro">
    <div class="intro__inner" id="js-intro-inner"></div>
</div>

<?php if($hideTopMenu){?>
<div class="wrapper" id="js-wrapper">
    <header class="header" id="js-header">
        <div class="header__inner">
            <div class="header__logo">
                <a href="index.php">
                    <svg class="sj-logo"><title>Ezequiel Gomez</title><use xlink:href="#sjLogo"/></svg>
                </a>
            </div>
<!--            <div class="header__logo--text">-->
<!--                <img src="http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/responsive/sj-logo-text.svg" alt="SHOKI JOETAKI">-->
<!--            </div>-->

            <div class="header__nav h-nav">
                <nav class="h-nav__inner">
                    <ul class="h-nav__list" id="js-nav">
                        <li><a href="news.php">News</a></li>
                        <li><a href="biography.php">Biography</a></li>
                        <li><a href="video.php">Video</a></li>
                        <li><a href="photo.php">Photo</a></li>
                        <li><a href="contacts.php">Contacts</a></li>
                    </ul>
                </nav>
            </div>
            <?php }?>
        </div>
    </header>