/*!
 * Mahlinas Online Store Blogger v1.0.0 (https://wwww.mSaado.com/)
 * Copyright 2023 CSS @Msaado
 * Copyright 2023 Msaado, Inc.
 * Licensed (https://www.Msaado.com/p/licenses.html)
 */
html {
    display: block
}

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display: block
}

body {
    line-height: 1;
    display: block
}

blockquote {
    background: var(--border-color);
    color: var(--font-body-color);
    margin: 2em 0;
    padding: 1em 2em;
    font-style: normal;
    border-left: 4px solid var(--keycolor);
    border-radius: 4px
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
}

input[type=number] {
    -moz-appearance: textfield
}

pre {
    font-family: monospace,monospace;
    background: #fafafa;
    padding: 1rem;
    word-break: break-word;
    white-space: pre-wrap
}

::selection {
    background: var(--keycolor);
    text-shadow: none
}

::-webkit-selection {
    background: var(--keycolor);
    text-shadow: none
}

::-moz-selection {
    background: var(--keycolor);
    text-shadow: none
}

a {
    cursor: pointer;
    text-decoration: none;
    color: #202ecd;
}

b,strong {
    font-weight: 200;
        font-style: normal;
        font-size: 16px;
    
}

img {
    max-width: ;
    display: block
}

#navbar-iframe,.widget-item-control,a.quickedit,.home-link,.feed-links {
    display: none!important
}

br {
    clear: none!important
}

.clear,.hide {
    top: -99999999px!important;
    left: -99999999px!important;
    z-index: -9999!important;
    opacity: 0!important;
    visibility: hidden!important
}

.clear:after {
    content: "";
    display: block;
    clear: both
}

h1,h2,h3,h4,h5,h6 {
    font-weight: bold
}

i {
    font-style: italic
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    max-width: 100%
}

table tr th {
    padding: 15px 10px;
    text-align: center;
    font-weight: 700;
    text-transform: none;
    line-height: 1.4;
    vertical-align: middle
}

table tr td,table tr th {
    padding: 8px 10px;
    border: 0;
    text-align: left;
    border-bottom: 1px solid var(--border-color)
}

* {
    margin: 0;
    padding: 0;
    outline: none!important;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    word-wrap: break-word;
    -webkit-font-smoothing: subpixel-antialiased
}

.widget-item-control {
    display: none!important
}

.temabanua-thumb {
    display: block;
    opacity: 0;
    transition: opacity .35s ease,transform .35s ease
}

.temabanua-thumb.in-lazy {
    opacity: 1
}

.mfp-arrow,.clear,.hide {
    position: var(--fixed-positon)!important
}

#loading:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    margin: -15px 0 0 -15px;
    border: 4px solid var(--border-color);
    border-left-color: $(link.color);
    border-right-color: var(--wrapper-background);
    border-radius: 100%;
    animation: spinner .8s infinite linear;
    transform-origin: center
}

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

#loading {
    display: none;
    position: var(--fixed-positon);
    z-index: 1000;
    top: 0;
    background: var(--wrapper-background);
    box-shadow: 0 100px 0 0 #fff;
    left: 0;
    width: 100%;
    height: 100%
}

.owl-carousel,.owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative
}

.owl-carousel {
    display: none;
    width: 100%;
    z-index: 1
}

.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
    touch-action: manipulation;
    -moz-backface-visibility: hidden
}

.owl-carousel .owl-stage:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0
}

.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0)
}

.owl-carousel .owl-item,.owl-carousel .owl-wrapper {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0)
}

.owl-carousel .owl-item {
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-touch-callout: none
}

.owl-carousel .owl-item img {
    display: block;
    width: 100%
}

.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled {
    display: none
}

.no-js .owl-carousel,.owl-carousel.owl-loaded {
    display: block
}

.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot {
    background: 0;
    color: inherit;
    border: 0;
    padding: 0!important;
    font: inherit
}

.owl-carousel.owl-loading {
    opacity: 0;
    display: block
}

.owl-carousel.owl-hidden {
    opacity: 0
}

.owl-carousel.owl-refresh .owl-item {
    visibility: hidden
}

.owl-carousel.owl-drag .owl-item {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.owl-carousel.owl-grab {
    cursor: move;
    cursor: grab
}

.owl-carousel.owl-rtl {
    direction: rtl
}

.owl-carousel.owl-rtl .owl-item {
    float: right
}

.owl-carousel .animated {
    animation-duration: 1s;
    animation-fill-mode: both
}

.owl-carousel .owl-animated-in {
    z-index: 0
}

.owl-carousel .owl-animated-out {
    z-index: 1
}

.owl-carousel .fadeOut {
    animation-name: fadeOut
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.owl-height {
    transition: height .5s ease-in-out
}

.owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    transition: opacity .4s ease
}

.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=""] {
    max-height: 0
}

.owl-carousel .owl-item img.owl-lazy {
    transform-style: preserve-3d
}

.owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000
}

.owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    background: url(owl.video.play.png) no-repeat;
    cursor: pointer;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    transition: transform .1s ease
}

.owl-carousel .owl-video-play-icon:hover {
    -ms-transform: scale(1.3,1.3);
    transform: scale(1.3,1.3)
}

.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn {
    display: none
}

.owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity .4s ease
}

.owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%
}

.owl-theme .owl-dots,.owl-theme .owl-nav {
    text-align: center;
    -webkit-tap-highlight-color: transparent
}

.owl-theme .owl-nav {
    margin-top: 10px
}

.owl-theme .owl-nav [class*=owl-] {
    color: #FFF;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
    background: #d6d6d6;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px
}

.owl-theme .owl-nav [class*=owl-]:hover {
    background: #869791;
    color: #FFF;
    text-decoration: none
}

.owl-theme .owl-nav .disabled {
    opacity: .5;
    cursor: default
}

.owl-theme .owl-nav.disabled+.owl-dots {
    margin-top: 10px
}

.owl-theme .owl-dots .owl-dot {
    display: inline-block;
    zoom:1}

.owl-theme .owl-dots .owl-dot span {
    width: 10px;
    height: 10px;
    margin: 5px 7px;
    background: #d6d6d6;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity .2s ease;
    border-radius: 30px
}

.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span {
    background: var(--keycolor)
}

#slideHome,.item-home .home-wrapper {
    padding: 0;
    
}

#slideHome .owl-carousel {
    display: block;
    width: 100%;
    margin: 0;
    border-radius: 0;
    box-sizing: border-box
}

#slideHome .owl-carousel a.slideIMG {
    display: block;
    padding-top: 35%;
    width: 100%;
    background-color: #fafafa;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center
}

.item-home .blog-posts-temabanua {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -10px
}

.item-home .item-post-home {
    width: calc(100%/4);
    box-sizing: border-box;
    padding: 0 1.8% 10px;
    
    word-wrap: break-word
}

.item-home .item-title-home {
    position: relative;
    text-align: center;
    margin: 0 0 30px
}

.item-home .title-homepage {
    position: relative;
    font-size: 20px;
    text-transform: none;
    margin: 30px 0 30px 0
}

.item-home .title-homepage:before {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--border-color)
}

.item-home .title-homepage .text {
    font-weight: 700;
    background: var(--background-body);
    display: ;
    vertical-align: top;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    letter-spacing: 1.5px;
}

.item-home .item-title-home a {
    color: #444;
    font-size: 14px;
    display: none;
    border-bottom: 1px solid;
    margin: 0 0 14px;
    text-transform: capitalize
}

.item-home .status-product .detailDescription,.item-home .status-product .detailInformasi,.item-home .item-post-product br {
    display: none
}

@media(min-width: 1025px) {
    .item-home .title-homepage {
        font-size:38px
    }

    .title-homepage .text {
        width: 300px
    }
}

@media only screen and (max-width: 800px) {
    .item-home .home-wrapper {
        padding:0;
        width: 100vw;
    }
}
@media only screen and (max-width: 800px) {
     {
        padding:0;
        display: none;
    }
}
@media only screen and (max-width: 640px) {
    .owl-carousel .owl-nav button.owl-prev,.owl-carousel .owl-nav button.owl-next {
        width:25px;
        height: 25px;
        font-size: 18px!important
    }

    .item-home .item-post-home {
        width: calc(100%/2)
    }
}

.item-home .option-product {
    display: none
}

.item-home .item-price * {
    display: inline;
    vertical-align: middle
}

.item-home .item-price .temabanua-off-price {
    font-size: 75%
}

.temabanua-off-price {
    display: block;
    margin-left: 10px;
    color: #999;
    text-decoration: line-through
}

.item-view .temabanua-off-price {
    margin: 8px 0
}

.item-home .img-product-wrap {
    display: block;
    position: relative;
    padding-top: 135%
}

.item-home .item-post-wrap:hover .img-product-wrap a:nth-child(2) {
    opacity: 1;
    transform: scale3d(1.1,1.1,1.1) translateZ(0)
}

.item-home .img-product-wrap a:nth-child(2) {
    opacity: 0;
    backface-visibility: hidden;
    transition: opacity .8s ease,transform 1.1s cubic-bezier(.15,.75,.5,1) 0s,-webkit-transform 1.1s cubic-bezier(.15,.75,.5,1) 0s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.item-view .item-post-product .product-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 0
}

.item-view .item-post-product {
    padding: 0 0 20px
}

.item-view .item-footer-temabanua {
    margin: 40px 0 0
}

.item-view .related-title {
    font-size: 1.1rem;
    text-transform: capitalize
}

.item-view .item-price,.item-view .item-title-product {
    font-size: 170%;
    overflow-wrap: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
        font-style: italic;
}

.item-view .temabanua-detail,.detailDescription {
    line-height: 1.4
}

.item-view .item-title-product,.item-price,.temabanua-detail {
    margin: 0 0 20px
}

.status-product:last-child {
    margin-bottom: 0
}

.item-view .item-price .temabanua-off-price,.item-view .item-price .temabanua-price-box span {
    font-size: 60%
}

.item-view .item-price .temabanua-price-box span {
    top: 20px
}

.item-view .img-product-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    position: relative
}

.item-view .img-product-wrap a:first-of-type {
    grid-column: 1 / 5
}

.item-view .gallery a {
    display: block;
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: unset;
    cursor: crosshair;
    background-repeat: no-repeat
}

@media(max-width: 1023px) {
    .item-related-product .pageTitle .item {
        grid-column:1/3
    }

    .item-related-product iframe#relatedFrame {
        width: calc(100% + 20px);
        margin-left: -10px
    }
}

.grid-wa {
    display: grid;
    grid-gap: 20px
}

.grid-wa.col2 {
    grid-template-columns: 1fr 1fr
}

.grid-wa.col3 {
    grid-template-columns: 1fr 1fr 1fr
}

.grid-wa.col4 {
    grid-template-columns: 1fr 1fr 1fr 1fr
}

.grid-wa.col2-submit {
    grid-template-columns: 1fr
}

.grid-wa.install-btn {
    grid-template-columns: 2fr 1fr
}

body {
    background: var(--background-body);
    margin: 0;
    padding: 0;
    color: var(--font-body-color);
    font: var(--font-body);
    text-align: left
}

.item-homepage #header-temabanua {
    border-bottom: 0
}

#header-temabanua {
    background: var(--header-color);
    color: var(--font-nav-color);
    position: var(--fixed-positon);
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #efefef;
    z-index: 999
}

#header-temabanua.sticky {
    border-bottom: 1px solid #efefef;
}

#header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    position: relative;
    height: 60px;
}

.temabanua-overflow {
    overflow: hidden
}

.temabanua-button {
    display: none
}

.temabanua-left,.temabanua-right {
    display: flex;
    align-items: center;
    -webkit-transition: .25s;
    transition: .25s
}

.header {
    max-width: 400px;
    float: left;
    margin-right: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 9999;
}

.header .toko-title,.header p.title {
    font-size: 24px;
    margin: 0;
    padding: var(--header-height) 0;
    font-weight: 700
}

.header .description {
    color: var(--font-nav-color);
    margin: -10px 0 4px 0;
    padding: 0;
    font-size: .7em;
    display: none
}

.header a {
    color: var(--font-nav-color)
}

.header a:hover,.off-sale-price {
    color: var(--keycolor)
}

.header img {
    display: block;
    width: auto;
    margin: 20px 0;
    max-height: 32px
}

.wrapper {
    margin: 0 auto;
    padding: 30px 0;
    width: 86%
}

.item-wrapper,#header-wrapper,.wrapper {
    max-width: 96%
}

.post-wrapper,.search-view .item-wrapper,html.archive-view .item-wrapper {
    padding: 70px 0 0;
    
}

.item-wrapper {
    width: 86%;
    margin: 0 auto
}

.item-wrapp {
    padding: 40px 0 0;
}

.item-wrappers {
    margin: 0 auto;
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    padding: 2vw 15px 0;
    background: linear-gradient(90deg, rgb(255 255 255) 37%, rgba(178, 235, 8, 0.9234287464985994) 100%);
    
    
    
}

.daftarProduk,.related-head {
    position: relative;
    margin-bottom: 30px
}

.item-price .temabanua-off-sale {
    position: absolute;
    top: 15px;
    left: 20px;
    background: var(--sale-background);
    color: var(--sale-color);
    border-radius: 4px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 75%;
    font-weight: 400
}

.item-view .breadcrumbs,.archive-view .breadcrumbs {
    margin: 15px 0;
    padding: 10px 0
}

.breadcrumbs a {
    color: inherit
}

.breadcrumbs a:hover {
    color: var(--keycolor)
}

.breadcrumbs {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 13px;
    white-space: nowrap;
    overflow-x: auto
}

.breadcrumbs .line {
    margin: 0 5px
}

.wrapper404 {
    margin: auto;
    padding: 70px 0 0;
    width: 100%
}

#halaman404 {
    display: flex;
    min-height: calc(100vh - 60px);
    text-align: center
}

#halaman404 h1 {
    font-size: 500%
}

#halaman404 h1 span {
    -webkit-animation: indicator .8s ease infinite!important;
    -moz-animation: indicator .8s ease infinite!important;
    animation: indicator .8s ease infinite!important;
    font-weight: 700;
    display: inline-block;
    vertical-align: top
}

#halaman404 small {
    color: rgba(0,0,0,.6)
}

.item-price {
    font-size: 110%;
    color: var(--font-body-color);
    display: inline-flex;
    align-items: center;
    padding: 0
}

@media(max-width: 1023px) {
    .item-price {
        align-items:baseline;
        flex-direction: column
    }

    .item-home .item-price .temabanua-off-price,.temabanua-off-price {
        display: initial;
        margin-left: 0
    }
}

.item-home .item-title-product {
    font-weight: 300;
    display: block;
    margin: 0 0 6px;
    font-size: 15px;
    line-height: 1.5em;
}

.item-home .item-title-product a {
    color: var(--link-visited)
}

.item-home .item-title-product a:hover {
    color: var(--keylink)
}

.img-product .slodout {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 5;
    top: 15px;
    left: 10px;
    cursor: pointer
}

.img-product .slodout .text {
    border-radius: 4px;
    text-transform: none;
    display: block;
    font-size: 75%;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    padding: 6px 8px;
    background: var(--sold-background);
    color: var(--sale-color)
}

.item-view .img-product .slodout {
    left: 15px
}

.blog-pager {
    text-align: center;
    margin: 1.8vw 0 2.5vw;
}

a.blog-pager-older-link {
    border-radius: 4px;
    padding: 12px 45px;
    border: 0 solid var(--font-body-color);
    color: #fff;
    font-weight: 400;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
    text-transform: capitalize;
    line-height: 1;
    transition: .3s ease-in-out;
    background:#000;
}

a.blog-pager-older-link:before {
    transition: .3s ease-in-out
}

a.blog-pager-older-link:before,a.blog-pager-older-link:hover {
    border: 2px solid var(--keycolor);
    background: var(--keycolor);
    color: #fff
}

.search-icon {
    position: relative
}

.search-icon a {
    color: var(--font-nav-color)
}

.search-icon svg {
    vertical-align: -3px;
    width: 24px;
    height: 24px;
    fill: currentColor
}

#searchItem {
    position: var(--fixed-positon);
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    opacity: 0;
    -webkit-transform: translate(0px,-100%) scale(0,0);
    -moz-transform: translate(0px,-100%) scale(0,0);
    -o-transform: translate(0px,-100%) scale(0,0);
    -ms transform: translate(0px,-100%) scale(0,0);
    transform: translate(0px,-100%) scale(0,0)
}

#searchItem.open {
    -webkit-transform: translate(0px,0px) scale(1,1);
    -moz-transform: translate(0px,0px) scale(1,1);
    -o-transform: translate(0px,0px) scale(1,1);
    -ms-transform: translate(0px,0px) scale(1,1);
    transform: translate(0px,0px) scale(1,1);
    opacity: 1;
    z-index: 9999
}

#searchItem input[type="search"] {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -51px;
    width: 70%;
    margin-left: 15%;
    color: var(--font-nav-color);
    background: transparent;
    border-top: 0;
    border-bottom: 2px solid rgba(0 0 0 / 50%);
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    font-size: 40px;
    text-align: center;
    outline: 0;
    padding: 10px
}

#searchItem .close {
    position: fixed;
    top: 20px;
    right: 30px;
    color: var(--font-nav-color);
    background-color: transparent;
    font-size: 56px;
    border: 0;
    outline: 0
}

#searchfs .close:hover {
    cursor: pointer;
    outline: 0
}

.new {
    background: var(--new-background);
    border-color: var(--new-background)
}

.hot {
    background: var(--hot-background);
    border-color: var(--hot-background)
}

.new,.hot {
    display: none;
    align-items: center;
    color: var(--sale-color);
    right: -3px;
    bottom: 100%;
    border-radius: 2px;
    font-size: 9px;
    line-height: 1;
    padding: 3px 6px;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
    position: absolute
}

.new:before,.hot:before {
    border: 3px solid transparent;
    content: "";
    height: 0;
    position: absolute;
    width: 0;
    top: 100%;
    left: 30%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform-origin: 0 0;
    border-top-color: inherit
}

#cssmenu,#cssmenu ul,#cssmenu ul li,#cssmenu ul li a {
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

#cssmenu ul li {
    float: left;
    margin: 0
}

#cssmenu ul li a {
    position: relative;
    padding: 0 17px;
    font: var(--font-nav-family);
    text-decoration: none;
    text-transform: none;
    color: var(--font-nav-color)
}

#cssmenu ul {
    margin: 0;
    display: block
}

#cssmenu ul li:hover a,#cssmenu ul li.active a {
    color: var(--keylink)
}

#cssmenu ul li.active:hover,#cssmenu ul li.active,#cssmenu ul li.has-sub.active:hover {
    background: rgba(64,64,64,0.1);
    -webkit-transition: background .2s ease;
    -ms-transition: background .2s ease;
    transition: background .2s ease
}

.hiddenMenu {
    display: none
}

.option-product div#coklat,.option-product div#blue,.option-product div#merah,.option-product div#hitam,.option-product div#hijau,.option-product div#kuning,.option-product div#putih,.option-product div#ungo,.option-product div#gold,.option-product div#gray,.option-product div#orange {
    border: 0;
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    min-width: 32px;
    font-size: 0;
    margin: 0 8px 0 0;
    padding: 0;
    border-radius: 50%
}

.option-product div.selected#coklat,.option-product div.selected#blue,.option-product div.selected#merah,.option-product div.selected#hitam,.option-product div.selected#hijau,.option-product div.selected#kuning,.option-product div.selected#putih,.option-product div.selected#ungo,.option-product div.selected#gold,.option-product div.selected#gray,.option-product div.selected#orange {
    box-shadow: 0 0 0 2px #ffffff,0 0 0 3px rgba(0,0,0,0.3)
}

.option-product div#merah {
    background: red
}

.option-product div#coklat {
    background: brown
}

.option-product div#blue {
    background: #1a73e8
}

.option-product div#gold {
    background: #ffd700
}

.option-product div#gray {
    background: #808080
}

.option-product div#ungo {
    background: #6002ee
}

.option-product div#orange {
    background: #c64b30
}

.option-product div#putih {
    background: #fff
}

.option-product div#hitam {
    background: #000
}

.option-product div#kuning {
    background: #ff0
}

.option-product div#hijau {
    background: #008000
}

.item-post-wrap {
    position: relative
}

.img-product>a {
    display: none
}

.img-product>a:first-of-type {
    display: block;
    padding-top: 125%;
    background: var(--border-color)
}

.img-product>a:first-of-type img {
    display: none
}

.item-post-product .product-box>h3 {
    display: none!important
}

@media(max-width: 1023px) {
    .widgetCopyright .widgetFooter {
        padding:40px 20px;
        font-size: 95%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px
    }

    .widgetCopyright .copyRight .grid {
        display: grid;
        padding: 0;
        grid-template-columns: 1fr;
        grid-gap: 20px
    }

    .widgetCopyright .copyRight .grid .widget {
        text-align: center
    }

    .widgetCopyright .copyRight ul {
        display: block;
        margin-left: 0;
        margin-top: 10px
    }

    .detailDescription br {
        display: block!important;
        margin-bottom: 10px
    }

    .status-product .detailDescription h3 {
        font-size: 14px
    }
}

@media screen and (max-width: 800px) {
    .archive-view .breadcrumbs {
        margin:10px 0 15px;
        display: block
    }

    .post-wrapper,html.archive-view .item-wrapper,.search-view .item-wrapper {
        padding: 70px 0 0;
        width: 100%;
        margin: 0 auto;
    }
    
.full-wra-dw {padding: 11px 20px 12px;
}
    #cssmenu {
        float: none
    }

    .mobile {
        overflow: hidden;
        height: 100%
    }

    #cssmenu .LinkList.nav {
        transform: translateX(0);
        visibility: visible
    }

    #cssmenu .LinkList {
        background: var(--header-color);
        box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%),0 6px 10px 4px rgb(60 64 67 / 15%);
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        position: var(--fixed-positon);
        top: 0;
        left: 0;
        transform: translateX(-280px);
        transition: transform .5s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear 0s;
        visibility: hidden;
        z-index: 1001;
        width: 280px
    }

    #cssmenu ul {
        width: 100%;
        display: block;
        height: auto
    }

    #cssmenu ul li a {
        padding: 11px 20px 12px;
        font-size: 16px
    }

    .hiddenMenu {
        padding: 20px;
        margin: 0 0 15px;
        display: block;
        position: relative;
        color: #444;
        border-bottom: 1px solid var(--border-color);
        cursor: pointer
    }

    .hiddenMenu span:after {
        content: attr(data-text);
        font-size: 11px;
        margin: 0 13px
    }

    .new,.hot {
        bottom: auto;
        top: 0;
        right: 65%
    }

    .closeItem {
        position: var(--fixed-positon);
        z-index: 1;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 1;
        background: rgba(0,0,0,0.5)
    }
}

.popWindow {
    font-size: 14px;
    line-height: 1.6
}

.popWindow {
    background-color: rgba(0,0,0,0.5);
    display: flex!important;
    position: relative;
    position: var(--fixed-positon)!important;
    z-index: +1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px 0;
    visibility: hidden;
    opacity: 0
}

.popWindow.open {
    visibility: visible;
    opacity: 1;
    transition: .2s
}

.popWindow a {
    text-decoration: none
}

.popWindow .wrap {
    display: block;
    margin: auto auto;
    width: calc(100% - 20px);
    box-shadow: 0 20px 50px rgba(0,0,0,.2);
    max-width: 500px
}

.popWindow .wrap .title {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
    margin: 0;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(0,0,0,.06);
    font-size: 14px;
    background: var(--wrapper-background);
    font-weight: 400;
    border-radius: 2px 2px 0 0
}

.popWindow .wrap .title span.title-content {
    padding: 0 20px;
    display: block;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 18px
}

.popWindow .wrap .title .closeWindow {
    display: block;
    color: #777;
    padding: 0 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    transition: .2s
}

.popWindow .wrap .title .closeWindow:hover {
    color: #444
}

.popWindow .wrap .content {
    display: block;
    background: var(--wrapper-background);
    border-radius: 0 0 2px 2px
}

.popWindow .popWindow-wrap {
    padding: 20px
}

.productCheckoutInfo {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 30px;
    padding: 20px;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-top: -20px;
    border-bottom: 1px solid rgba(0,0,0,.06);
    margin-bottom: 20px
}

.imgBanua {
    position: relative;
    width: 98px;
    height: 98px
}

.productCheckoutInfo .total {
    color: var(--keylink)
}

.productCheckoutInfo .ongkir {
    opacity: .8;
    font-size: 70%
}

.productCheckoutInfo .waText {
    display: none;
    opacity: 0;
    text-indent: -9999px
}

.productOptionInfo {
    font-size: .775rem;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px
}

.productOptionInfo tr td,.productOptionInfo tr th,#temabanua-mailchimp .widget .flex {
    padding: 0;
    border: 0;
    margin: 0
}
      .title-homepages {
  font-size: 40px;
    color: #ffffff;
    text-align: -webkit-left;
    display: block;
    padding: 10px 15px 0;
    font-weight: 700;
  }

.footer-wrapper {
    border-top: 1px solid var(--border-color);
    float: left;
    width: 100%;
    display: block;
    padding: 60px 0;
    color: rgba(0,0,0,.6)
}

.footer-wrapper .grid {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 40px
}

.footer-wrapper .grid .widget {
    display: block
}

.footer-wrapper .grid .widget:nth-last-child(1) {
    border-right: 0;
    padding-right: 0
}

.footer-wrapper .grid .widget .icon,.footer-wrapper .grid .widget .text {
    display: flex
}

.footer-wrapper .grid .widget .icon i,.footer-wrapper .grid .widget .text .textWrap {
    text-align: center;
    display: block;
    margin: auto
}

.footer-wrapper .grid .widget .text {
    margin-top: 15px
}

.footer-wrapper .grid .widget .text h4 {
    position: relative;
    font-size: 120%;
    margin-bottom: 20px;
    font-weight: 600;
    color: rgba(0,0,0,.8)
}

.footer-wrapper .grid .widget .text small {
    color: rgba(0,0,0,.6)
}

.item-mail-temabanua {
    width: 640px;
    text-align: center
}

#temabanua-mailchimp .widget {
    position: relative;
    padding: 60px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--footer-border);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
}

#temabanua-mailchimp h2 {
    font-size: 24px;
    line-height: 25px;
    margin: 0 0 15px
}

.mailchimp-email-address {
    border: 1px solid var(--background-body);
    background: var(--background-body);
    font-size: 16px;
    border-radius: 2px;
    width: 100%;
    font-family: inherit;
    padding: 1rem 2rem;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0
}

.mail-input {
    display: flex;
    flex: 1;
    width: 100%;
    position: relative;
    margin-right: 10px
}

.mailchimp-submit {
    background: var(--keycolor);
    border: 1px solid var(--keycolor);
    color: #fff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    width: 150px;
    min-width: 130px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px
}

.mail-caption {
    line-height: 26px;
    margin: 0 0 33px
}

.footerCopyright {
    background: var(--footer-background)
}

.footerCopyright .copyrightFooter {
    color: inherit;
    padding: 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px
}

.footerCopyright .copyrightFooter .widget h2 {
    font-size: 16px;
    display: block;
    margin: 0 0 12px;
    font-weight: 700;
    color: var(--footer-color);
    line-height: 35px
}

.pengirimanSupport li {
    display: inline-block;
    height: 32px;
    width: 52px;
    border: 1px solid rgba(0,0,0,.06);
    margin: 3px 2px;
    background-color: var(--footer-color);
    border-radius: 2px;
    background-position: center center;
    background-size: 90% auto;
    background-repeat: no-repeat
}

.footerCopyright .copyRight {
    d
    background: var(--footer-copyright);
    padding: 20px 0 30px 0
}

.footerCopyright .copyRight a,#footer ul li a,.mail-caption {
    color: var(--footer-primary)
}

.footerCopyright .copyRight .grid {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display:none;
}

.item-view #footer {
    margin: 0
}

#footer,#item-hot-sale .widget {
    margin-top: 60px;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box
}
#item-hot-sales .widget {
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    box-sizing: border-box;
    padding: 0 25px 0;
    width: 100vw;
    
    background: #000;
}
}
#footer ul {
    margin: 0;
    padding: 0;
    list-style: none
}

#footer ul li a {
    display: inline-block;
    line-height: 30px
}

#footer ul li a:hover,.footerCopyright .copyRight,#temabanua-mailchimp h2 {
    color: var(--footer-color)
}

#footer .social {
    margin: 16px 0 30px 0
}

.social ul li {
    display: inline-block;
    margin: 0 10px 6px 0;
    padding: 0
}

#footer .social ul li a {
    display: block;
    position: relative;
    width: 100%;
    line-height: 1;
    border-radius: 50%
}

.social svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    fill: currentColor
}

.contact-item.item-0 {
    margin: 0
}

.contact-item {
    text-align: left;
    display: block;
    overflow: hidden;
    font-size: 14px;
    line-height: 30px;
    margin: 15px 0 0
}

.item-home .img-product {
    margin: 0 0 20px
}

.img-product {
    position: relative;
    overflow: hidden
}

.item-home .img-product-wrap .temabanua-thumb {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% center;
    background-repeat: no-repeat
}

.item-home .off-blur .temabanua-thumb {
    opacity: .5;
    cursor: not-allowed
}

.item-view .img-product-wrap .temabanua-thumb {
    background-position: unset
}

.option-product {
    display: block;
    margin-bottom: 25px
}

.option-product span {
    display: block;
    margin: 0 0 15px;
    text-transform: uppercase;
    letter-spacing: -.02em;
    font-size: 13px
}

.option-product div {
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    display: inline-block;
    margin: 0;
    min-width: 35px;
    height: 35px;
    padding: 0 10px;
    border: 1px solid var(--border-color)
}

.option-product div:active {
    background: var(--border-color)
}

.option-product div.selected {
    background-color: var(--keybokep);
    color: #fff
}

.productCheckout {
    position: relative
}

.productQty {
    position: relative;
    margin: 0
}

.productQty .shopProduct-button {
    margin: 0 20px 0 0;
    height: 46px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    box-sizing: border-box
}

.productCheckout .avabaile {
    position: relative
}

.productCheckout .stock {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.8);
    color: var(--keylink);
    text-align: center;
    letter-spacing: 2px
}

.productCheckout .stock div {
    display: block;
    margin: auto;
    opacity: 0
}

.shareWrapper {
    display: flex;
    align-items: center;
    position: relative
}

.banua-deskripsi,.productTab .tabContent,.shareWrapper {
    padding: 20px 0
}

.content-share .share-more-list {
    padding: 20px 0
}

.shareIcon {
    padding-left: 20px
}

.shareIcon a {
    color: #343434;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 3px 0;
    height: 34px;
    width: 34px;
    cursor: pointer;
    line-height: 34px;
    box-sizing: border-box;
    border: 1px solid #343434;
    border-radius: 50%;
    padding: 5px;
    transition: all .17s ease
}

.shareIcon a:hover {
    opacity: .9
}

.shareIconr a i {
    display: inline-block;
    vertical-align: middle;
    font-size: 110%
}

.shareIcon a:hover svg {
    transform: scale(1.1)
}

.productTab .tabNavs ul {
    list-style: none
}

.temabanua_down .downT {
    transform: rotate(180deg)
}

.productTab .tabFlex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between
}

.productTab .tabContent {
    display: none
}

.productTab .tabContent.selected {
    display: block
}

.productTab .tabNav .detailDescription ol {
    list-style-type: decimal
}

.productTab .tabNav .detailDescription ul {
    list-style-type: disc
}

.productTab .tabNav .detailDescription p {
    margin: 0 0 20px
}

.productTab .tabNav .detailDescription ul,.productTab .tabNav .detailDescription ol {
    margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px}

.flex {
    display: flex;
    align-items: center;
    margin: 0 0 20px
}

.productQty * {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    line-height: 46px
}

.productQty button {
    border: 0;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    padding: 1rem;
    width: 46px;
    height: 46px
}

.productQty button:active {
    background: rgba(0,0,0,.08)
}

.productQty input {
    background: transparent;
    width: 46px;
    text-align: center;
    padding: 0;
    border: 0;
    font-size: 16px
}

.productOrder {
    flex: 1;
    margin: 0;
    text-transform: none
}

.productOrder a {
    font-size: 1em;
    font-weight: 500;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    text-align: center;
    background: var(--keybokep);
    color: #fff;
    height: 46px
}

.productOrder a:hover {
    background-color: var(--keycolor)
}

.copyUrl {
    width: 100%;
    padding: 1rem 2rem;
    border: 1px solid var(--border-color);
    background: var(--input-bg);
    color: var(--font-body-color);
    border-radius: 4px;
    transition: all .4s;
    box-sizing: border-box
}

.temabanua-copy-link {
    cursor: pointer;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    text-align: center;
    background: var(--keybokep);
    border-color: var(--keybokep);
    color: #fff;
    margin-left: 1rem
}

.item-related-product {
    background: transparent;
    padding: 0 0 20px
}

.item-related-product iframe#related-ready {
    width: 100%
}

.owl-carousel .statusPromo {
    width: 400px;
    position: absolute;
    top: 40%;
    left: auto;
    right: 10%;
    -webkit-transform: translateY(-40%);
    transform: translateY(-40%)
}

.owl-carousel .statusPromo .title {
    font-size: 16px;
    color: var(--keycolor);
    text-transform: uppercase
}

.owl-carousel .shopNow {
    font-size: 56px;
    color: var(--slider-color);
    line-height: 71px;
    font-weight: 500;
    position: relative
}

.owl-theme .owl-dots .owl-dot span,.owl-theme .owl-dots .owl-dot:hover span {
    background: $(owl.color)!important
}

.owl-theme .owl-dots .owl-dot.active span {
    width: 10px!important;
    height: 10px!important;
    transition: .1s!important
}

.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:active span {
    background: $(owl.font.color)!important
}

.owl-carousel {
    position: relative!important
}

.owl-dots {
    position: absolute!important;
    bottom: 5%!important;
    left: calc(50% - 75px)!important;
    width: 150px!important;
    text-align: center!important
}

.owl-carousel .owl-nav button.owl-prev,.owl-carousel .owl-nav button.owl-next {
    position: absolute;
    top: 50%;
    background: $(owl.color)!important;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 51px;
    color: var(--slider-color)!important;
    left: 15px;
    -webkit-transition: .3s;
    transition: .3s;
    font-size: 200%!important
}

.owl-carousel .owl-nav button.owl-next {
    left: auto;
    right: 15px
}

.owl-carousel .owl-nav button.owl-next:hover,.owl-carousel .owl-nav button.owl-prev:hover {
    background: var(--slider-color)!important;
    opacity: 1;
    color: $(owl.color)!important
}

#slideHome {
    padding: 60px 0 60px 0
}

#slideHome .owl-carousel {
    overflow: hidden
}

.liveChat {
    position: var(--fixed-positon);
    z-index: 10;
    bottom: 20px
}

.liveChat.kiri {
    left: 20px
}

.liveChat.kanan {
    right: 20px
}

.liveChat .wa {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #eee635;
    color: #000000;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08)
}

.liveChat:active .wa {
    box-shadow: none
}

.liveChat .wa svg {
    width: 24px;
    height: 24px
}

.liveChat span.info {
    display: inline-block;
    white-space: nowrap;
    border-radius: 4px;
    background: var(--wrapper-background);
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    text-align: center;
    position: relative;
    position: absolute!important;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    bottom: 8px;
    color: rgba(0,0,0,.6);
    opacity: 0;
    visibility: hidden
}

.liveChat.show span.info {
    opacity: 1;
    visibility: visible;
    transition: 1s
}

.liveChat.kiri span.info {
    left: calc(100% + 45px)
}

.liveChat.kiri.show span.info {
    left: calc(100% + 15px)
}

.liveChat.kanan span.info {
    right: calc(100% + 45px)
}

.liveChat.kanan.show span.info {
    right: calc(100% + 15px)
}

.liveChat span.info:after {
    position: absolute;
    top: calc(50% - 8px);
    content: "";
    border: 8px solid
}

.liveChat.kiri span.info:after {
    right: 100%;
    border-color: transparent #fff transparent transparent
}

.liveChat.kanan span.info:after {
    left: 100%;
    border-color: transparent transparent transparent #fff
}

.liveChat span.info i {
    display: inline-block;
    font-size: 140%;
    margin-right: 5px;
    vertical-align: middle;
    color: #4fc3f7
}

.item-select-filter {
    position: relative
}

.item-select-filter svg {
    position: absolute;
    z-index: -1;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px
}

.item-product-filter {
    padding: 15px 0 15px;
    margin: 0 0 20px;
    align-items: center;
    display: flex;
    justify-content: space-between
}

.item-select-filter select {
    display: block;
    width: 100%;
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
    border-radius: 2px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    background: transparent;
    font-size: 90%;
    color: rgba(0,0,0,.8)
}

.item-select-filter select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-right: 25px;
    min-width: 150px;
    width: 100%
}

.item-select-filter select:active {
    box-shadow: inset 0 -35px 0 0 rgba(0,0,0,.08)
}

@media only screen and (max-width: 1080px) {
    #slideHome .owl-carousel {
        width:100%!important;
        margin: 0!important
    }

    .footer-wrapper {
        padding: 0
    }

    .footer-wrapper .grid {
        grid-gap: 40px;
        font-size: 90%;
        width: 100%;
        max-width: calc(100% + 20px);
        grid-template-columns: repeat(3,60%) 1px;
        overflow-x: auto;
        padding: 40px 10px;
        padding-left: 30px
    }

    .footer-wrapper .grid:after {
        content: "";
        display: block
    }

    .footer-wrapper .grid .widget {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 10px;
        text-align: center
    }

    .footer-wrapper .grid .widget .icon,.footer-wrapper .grid .widget .text {
        display: block
    }
}

@media(max-width: 768px) {
    .item-view .item-price .temabanua-off-sale {
        left:10px
    }

    .item-view .item-post-product .product-box {
        display: inherit;
        padding: 5px 0
    }

    .productOrder {
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden
    }

    .productCheckout .avabaile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        bottom: 0;
        margin: 0;
        left: 0;
        max-height: 80px;
        min-height: 60px;
        height: auto;
        padding: 15px;
        position: var(--fixed-positon);
        right: 0;
        background: var(--wrapper-background);
        z-index: 81;
        box-shadow: rgb(49 53 59 / 12%) 0 -1px 6px
    }

    .productQty *,.productQty .shopProduct-button,.productOrder a {
        height: 44px;
        line-height: 44px
    }

    .productQty button,.productQty input {
        height: 44px;
        width: 44px
    }
}

@media only screen and (max-width: 800px) {
    .item-mail-temabanua,.footerCopyright .copyrightFooter {
        padding:0 20px
    }

    #temabanua-mailchimp .widget .flex {
        flex-direction: column
    }

    .mail-input {
        margin: 0 0 10px
    }

    .mailchimp-submit,.item-mail-temabanua {
        width: 100%
    }

    #temabanua-mailchimp .widget {
        padding: 40px 0;
        margin: 0;
        border: 0
    }

    .mailchimp-email-address {
        text-align: center
    }

    .temabanua-button,.search-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 20px
    }

    .temabanua-button svg {
        vertical-align: middle;
        width: 24px;
        height: 24px
    }

    .header,.item-view .item-footer-temabanua {
        margin: 0;
        padding: 0
    }

    .header,#cssmenu ul li {
        float: none
    }

    #header-wrapper {
        max-width: 100%
    }

    .header .toko-title,.header p.title {
        padding: 10px 0
    }

    .footerCopyright .copyRight .grid,.footerCopyright .copyRight .widget-content {
        font-size: 14px;
        line-height: 1.6;
        text-align: center;
        margin: 0
    }

    #slideHome {
        padding: 65px 0 25px
    }

    .item-view .breadcrumbs,.owl-carousel .statusPromo,.item-view .liveChat .wa {
        display: none
    }

    .item-view .item-title-product {
        font-weight: 400;
        line-height: 20px;
        margin: 20px 0 12px;
        font-size: 1rem
    }

    #cssmenu ul {
        max-height: calc(100vh - 48px);
        overflow-y: auto
    }

    .header img {
        display: inline-block
    }

    .footer-wrapper .grid {
        grid-template-columns: repeat(3,30%) 1px;
        overflow-x: auto;
        padding: 40px 10px
    }

    .footerCopyright .copyrightFooter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px
    }
}

@media only screen and (max-width: 640px) {
    .footerCopyright .copyrightFooter,.footerCopyright .copyRight .grid {
        grid-template-columns:1fr
    }

    .footer-wrapper .grid {
        grid-template-columns: repeat(3,60%) 1px
    }

    .footerCopyright .copyRight .widget-content {
        float: none
    }
}

@media(max-width: 1023px) {
    .chatWhatsapp .grid-wa.col2 {
        grid-template-columns:1fr 1fr!important
    }
}

@media(max-width: 320px) {
    .chatWhatsapp .grid-wa.col2 {
        grid-template-columns:1fr!important
    }
}

.chatWhatsapp * {
    outline: 0;
    text-decoration: none
}

@media(max-width: 1023px) {
    .chatWhatsapp * {
        font-size:12px
    }
}

.chatWhatsapp br {
    margin: 0;
    padding: 0;
    line-height: 0
}

.chatWhatsapp h4 {
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color)
}

.chatWhatsapp .focus {
    box-shadow: inset 0 -1px 0 0 var(--error-color)
}

.chatWhatsapp label {
    position: relative;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0
}

.chatWhatsapp label>input,.chatWhatsapp label>select,.chatWhatsapp label>textarea {
    font-family: inherit;
    position: relative;
    z-index: 1;
    border: 0;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.08);
    padding: 15px 15px;
    width: 100%;
    padding-left: 25px;
    background: transparent
}

.chatWhatsapp label>input:focus,.chatWhatsapp label>select:focus,.chatWhatsapp label>textarea:focus {
    box-shadow: inset 0 -1px 0 0 var(--keycolor)
}

.chatWhatsapp label svg {
    position: absolute;
    z-index: 0;
    display: inline-block;
    height: auto;
    background: transparent;
    top: 15px;
    left: 0;
    color: rgba(0,0,0,.2)
}

.chatWhatsapp select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    text-align: left
}

.chatWhatsapp select option {
    font-size: 18px;
    background: #fafafa;
    color: rgba(0,0,0,0.7);
    text-shadow: none;
    text-align: left
}

.chatWhatsapp .nomor_whatsapp[type=number]::-webkit-outer-spin-button,.chatWhatsapp .nomor_whatsapp[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.nomor_whatsapp[type="number"] {
    -moz-appearance: textfield
}

.chatWhatsapp label>*:focus {
    background: transparent
}

.chatWhatsapp label textarea {
    min-height: 40px;
    resize: vertical;
    font-family: inherit;
    margin-bottom: 0
}

.chatWhatsapp label .validasi {
    position: relative;
    position: absolute!important;
    z-index: 2;
    top: calc(100% + 20px);
    left: 0;
    background: #fff7e2;
    color: #8b6f32;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 80%;
    box-shadow: 0 5px 10px rgba(0,0,0,.08);
    transition: .4s;
    visibility: hidden;
    opacity: 0;
    display: inline-block!important
}

.chatWhatsapp label .validasi.show {
    visibility: visible;
    opacity: 1;
    top: calc(100% + 10px)
}

.chatWhatsapp label .validasi:after {
    position: absolute;
    bottom: 100%;
    left: 12px;
    content: "";
    border: 8px solid;
    border-color: transparent transparent #fff7e2 transparent
}

.chatWhatsapp .submit,.chatWhatsapp .submit.s2 {
    display: block;
    text-align: center;
    border: 0;
    width: 100%;
    display: block;
    background: var(--keycolor);
    color: #fff;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 2px;
    font-weight: 600;
    font-size: 105%;
    letter-spacing: 1px;
    box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.08)
}

.chatWhatsapp .submit:active {
    box-shadow: inset 0 -60px 0 0 rgba(0,0,0,.08)
}

.xnxx {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 1;
    transform-origin: center;
    opacity: 0;
    transition: opacity .35s ease,transform .35s ease
}

.mfp-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1042;
    overflow: hidden;
    position: var(--fixed-positon);
    background: #0b0b0b;
    opacity: .8
}

.mfp-wrap {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1043;
    position: var(--fixed-positon);
    outline: none!important;
    -webkit-backface-visibility: hidden
}

.mfp-container {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 8px;
    box-sizing: border-box
}

.mfp-container:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle
}

.mfp-align-top .mfp-container:before {
    display: none
}

.mfp-content {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: left;
    z-index: 1045
}

.mfp-inline-holder .mfp-content,.mfp-ajax-holder .mfp-content {
    width: 100%;
    cursor: auto
}

.mfp-ajax-cur {
    cursor: progress
}

.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
    cursor: -moz-zoom-out;
    cursor: -webkit-zoom-out;
    cursor: zoom-out
}

.mfp-zoom {
    cursor: pointer;
    cursor: -webkit-zoom-in;
    cursor: -moz-zoom-in;
    cursor: zoom-in
}

.mfp-auto-cursor .mfp-content {
    cursor: auto
}

.mfp-close,.mfp-arrow,.mfp-preloader,.mfp-counter {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.mfp-loading.mfp-figure {
    display: none
}

.mfp-hide {
    display: none!important
}

.mfp-preloader {
    color: #CCC;
    position: absolute;
    top: 50%;
    width: auto;
    text-align: center;
    margin-top: -0.8em;
    left: 8px;
    right: 8px;
    z-index: 1044
}

.mfp-preloader a {
    color: #CCC
}

.mfp-preloader a:hover {
    color: #FFF
}

.mfp-s-ready .mfp-preloader {
    display: none
}

.mfp-s-error .mfp-content {
    display: none
}

button.mfp-close,button.mfp-arrow {
    overflow: visible;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    display: block;
    outline: 0;
    padding: 0;
    z-index: 1046;
    box-shadow: none;
    touch-action: manipulation
}

button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.mfp-close {
    width: 44px;
    height: 44px;
    line-height: 44px;
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: none;
    text-align: center;
    opacity: .65;
    padding: 0 0 18px 10px;
    color: #FFF;
    font-style: normal;
    font-size: 28px;
    font-family: Arial,Baskerville,monospace
}

.mfp-close:hover,.mfp-close:focus {
    opacity: 1
}

.mfp-close:active {
    top: 1px
}

.mfp-close-btn-in .mfp-close {
    color: #333
}

.mfp-image-holder .mfp-close,.mfp-iframe-holder .mfp-close {
    color: #FFF;
    right: -6px;
    text-align: right;
    padding-right: 6px;
    width: 100%
}

.mfp-counter {
    position: absolute;
    top: 0;
    right: 0;
    color: #CCC;
    font-size: 12px;
    line-height: 18px;
    white-space: nowrap
}

.mfp-arrow {
    position: absolute;
    opacity: .65;
    margin: 0;
    top: 50%;
    margin-top: -55px;
    padding: 0;
    width: 90px;
    height: 110px;
    -webkit-tap-highlight-color: transparent
}

.mfp-arrow:active {
    margin-top: -54px
}

.mfp-arrow:hover,.mfp-arrow:focus {
    opacity: 1
}

.mfp-arrow:before,.mfp-arrow:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 35px;
    margin-left: 35px;
    border: medium inset transparent
}

.mfp-arrow:after {
    border-top-width: 13px;
    border-bottom-width: 13px;
    top: 8px
}

.mfp-arrow:before {
    border-top-width: 21px;
    border-bottom-width: 21px;
    opacity: .7
}

.mfp-arrow-left {
    left: 0
}

.mfp-arrow-left:after {
    border-right: 17px solid #FFF;
    margin-left: 31px
}

.mfp-arrow-left:before {
    margin-left: 25px;
    border-right: 27px solid #3f3f3f
}

.mfp-arrow-right {
    right: 0
}

.mfp-arrow-right:after {
    border-left: 17px solid #FFF;
    margin-left: 39px
}

.mfp-arrow-right:before {
    border-left: 27px solid #3f3f3f
}

.mfp-iframe-holder {
    padding-top: 40px;
    padding-bottom: 40px
}

.mfp-iframe-holder .mfp-content {
    line-height: 0;
    width: 100%;
    max-width: 900px
}

.mfp-iframe-holder .mfp-close {
    top: -40px
}

.mfp-iframe-scaler {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-top: 56.25%
}

.mfp-iframe-scaler iframe {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 8px rgba(0,0,0,0.6);
    background: #000
}

img.mfp-img {
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 40px 0 40px;
    margin: 0 auto
}

.mfp-figure {
    line-height: 0
}

.mfp-figure:after {
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 40px;
    display: block;
    right: 0;
    width: auto;
    height: auto;
    z-index: -1;
    box-shadow: 0 0 8px rgba(0,0,0,0.6);
    background: #444
}

.mfp-figure small {
    color: #bdbdbd;
    display: block;
    font-size: 12px;
    line-height: 14px
}

.mfp-figure figure {
    margin: 0
}

.mfp-bottom-bar {
    margin-top: -36px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    cursor: auto
}

.mfp-title {
    text-align: left;
    line-height: 18px;
    color: #f3f3f3;
    word-wrap: break-word;
    padding-right: 36px
}

.mfp-image-holder .mfp-content {
    max-width: 100%
}

.mfp-gallery .mfp-image-holder .mfp-figure {
    cursor: pointer
}

@media screen and (max-width: 800px) and (orientation:landscape),screen and (max-height:300px) {
    .mfp-img-mobile .mfp-image-holder {
        padding-left:0;
        padding-right: 0
    }

    .mfp-img-mobile img.mfp-img {
        padding: 0
    }

    .mfp-img-mobile .mfp-figure:after {
        top: 0;
        bottom: 0
    }

    .mfp-img-mobile .mfp-figure small {
        display: inline;
        margin-left: 5px
    }

    .mfp-img-mobile .mfp-bottom-bar {
        background: rgba(0,0,0,0.6);
        bottom: 0;
        margin: 0;
        top: auto;
        padding: 3px 5px;
        position: var(--fixed-positon);
        box-sizing: border-box
    }

    .mfp-img-mobile .mfp-bottom-bar:empty {
        padding: 0
    }

    .mfp-img-mobile .mfp-counter {
        right: 5px;
        top: 3px
    }

    .mfp-img-mobile .mfp-close {
        top: 0;
        right: 0;
        width: 35px;
        height: 35px;
        line-height: 35px;
        background: rgba(0,0,0,0.6);
        position: var(--fixed-positon);
        text-align: center;
        padding: 0
    }
}

@media all and (max-width: 900px) {
    .mfp-arrow {
        -webkit-transform:scale(0.75);
        transform: scale(0.75)
    }

    .mfp-arrow-left {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0
    }

    .mfp-arrow-right {
        -webkit-transform-origin: 100%;
        transform-origin: 100%
    }

    .mfp-container {
        padding-left: 16px;
        padding-right: 16px
    }
}

@media(max-width: 1025px) {
    .preview .item-wrapper,.preview #header-wrapper,.preview .wrapper {
        width:900px
    }
}

@media(min-width: 800px) {
    .item-page body {
        background:var(--body-page)
    }

    .item-page .post-wrapper {
        background: var(--wrapper-background);
        border: 1px solid var(--border-color);
        padding: 20px;
        margin-top: 90px;
        width: 900px;
        border-radius: 4px
    }
}

.item-page .breadcrumbs {
    display: block;
    margin: 0 0 15px 0;
    padding: 10px 0
}

.item-page .page-headline {
    display: block;
    margin-bottom: 20px
}

.item-page .page-headline h1 {
    font-size: 26px;
    font-weight: 700
}

.item-page .pages-box ul,.item-page .pages-box ol {
    padding-left: 40px;
    box-sizing: border-box;
    width: 100%
}

.item-page .pages-box {
    line-height: 1.6
}

.item-page .pages-box p,.pages-box h1,.pages-box h2,.pages-box h3,.pages-box h4,.pages-box h5,.pages-box h6,.item-page table,.item-page pre,.item-page ol,.item-page ul,.item-pagebutton {
    margin: 0 0 20px
}

@media(max-width: 800px) {
    .item-page .breadcrumbs {
        margin:10px 0
    }

    .footerCopyright .copyRight {
        padding-left: 15px;
        padding-right: 15px
    }
}
