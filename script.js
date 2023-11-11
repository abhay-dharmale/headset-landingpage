function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed"*/
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
loco()



// -------------------------------------------------- PAGE 1

gsap.from(".homepage .text>h1", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    ease: "power4.inOut",
})

gsap.from(".homepage .left>p", {
    opacity: 0,
    stagger: 0.1,
    duration: 1.3,
    ease: "power4.inOut",
})



// -------------------------------------------------- PAGE 2

var tl = gsap.timeline({                    //main
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page2",
        start: "top 55%",
        end: "top 30%",
    },
});

tl.from(".page2>.content>img", {
    scale: 1.5,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1, 
});

tl.from(".page2>.content>h1", {
    opacity: 0,
    // y: 20,
    duration: 0.8,
    stagger: 0.1, 
});

gsap.to(".page2>.content>h1",{        //h1
    fontSize: "10vw",
    scrollTrigger:{
        scroller: "#main",
        trigger: ".page2",
        start: "top 0%",
        end: "top -100%",
        scrub: true
    }

})



















gsap.from("canvas", {
    scale: 0.5,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page3",
        start: "top 100%",
        end: "top -50%",
        scrub: true
    }
})


function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
./images/Image1.jpg
./images/Image2.jpg
./images/Image3.jpg
./images/Image4.jpg
./images/Image5.jpg
./images/Image6.jpg
./images/Image7.jpg
./images/Image8.jpg
./images/Image9.jpg
./images/Image10.jpg
./images/Image11.jpg
./images/Image12.jpg
./images/Image13.jpg
./images/Image14.jpg
./images/Image15.jpg
./images/Image16.jpg
./images/Image17.jpg
./images/Image18.jpg
./images/Image19.jpg
./images/Image20.jpg
./images/Image21.jpg
./images/Image22.jpg
./images/Image23.jpg
./images/Image24.jpg
./images/Image25.jpg
./images/Image26.jpg
./images/Image27.jpg
./images/Image28.jpg
./images/Image29.jpg
./images/Image30.jpg
./images/Image31.jpg
./images/Image32.jpg
./images/Image33.jpg
./images/Image34.jpg
./images/Image35.jpg
./images/Image36.jpg
./images/Image37.jpg
./images/Image38.jpg
./images/Image39.jpg
./images/Image40.jpg
./images/Image41.jpg
./images/Image42.jpg
./images/Image43.jpg
./images/Image44.jpg
./images/Image45.jpg
./images/Image46.jpg
./images/Image47.jpg
./images/Image48.jpg
./images/Image49.jpg
./images/Image50.jpg
./images/Image51.jpg
./images/Image52.jpg
./images/Image53.jpg
./images/Image54.jpg
./images/Image55.jpg
./images/Image56.jpg
./images/Image57.jpg
./images/Image58.jpg
./images/Image59.jpg
./images/Image60.jpg
./images/Image61.jpg
./images/Image62.jpg
./images/Image63.jpg
./images/Image64.jpg
 `;
        return data.split("\n")[index];
    }

    const frameCount = 64;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#home>canvas`,
            //   set start end according to preference
            start: `top 50%`,
            end: `top -550%`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#home",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}
canvas()

// ./images/Image65.jpg
// ./images/Image66.jpg
// ./images/Image67.jpg
// ./images/Image68.jpg
// ./images/Image69.jpg
// ./images/Image70.jpg
// ./images/Image71.jpg
// ./images/Image72.jpg
// ./images/Image73.jpg
// ./images/Image74.jpg
// ./images/Image75.jpg
// ./images/Image76.jpg
// ./images/Image77.jpg
// ./images/Image78.jpg
// ./images/Image79.jpg
// ./images/Image80.jpg
// ./images/Image81.jpg
// ./images/Image82.jpg
// ./images/Image83.jpg
// ./images/Image84.jpg
// ./images/Image85.jpg
// ./images/Image86.jpg
// ./images/Image87.jpg
// ./images/Image88.jpg
// ./images/Image89.jpg
// ./images/Image90.jpg
// ./images/Image91.jpg
// ./images/Image92.jpg
// ./images/Image93.jpg
// ./images/Image94.jpg
// ./images/Image95.jpg
// ./images/Image96.jpg
// ./images/Image97.jpg
// ./images/Image98.jpg
// ./images/Image99.jpg
// ./images/Image100.jpg
// ./images/Image101.jpg
// ./images/Image102.jpg
// ./images/Image103.jpg
// ./images/Image104.jpg
// ./images/Image105.jpg
// ./images/Image106.jpg
// ./images/Image107.jpg
// ./images/Image108.jpg
// ./images/Image109.jpg
// ./images/Image110.jpg
// ./images/Image111.jpg
// ./images/Image112.jpg
// ./images/Image113.jpg
// ./images/Image114.jpg
// ./images/Image115.jpg
// ./images/Image116.jpg
// ./images/Image117.jpg
// ./images/Image118.jpg
// ./images/Image119.jpg
// ./images/Image120.jpg
// ./images/Image121.jpg
// ./images/Image122.jpg
// ./images/Image123.jpg
// ./images/Image124.jpg
// ./images/Image125.jpg
// ./images/Image126.jpg
// ./images/Image127.jpg
// ./images/Image128.jpg
// ./images/Image129.jpg
// ./images/Image130.jpg
// ./images/Image131.jpg
// ./images/Image132.jpg
// ./images/Image133.jpg
// ./images/Image134.jpg
// ./images/Image135.jpg
// ./images/Image136.jpg
// ./images/Image137.jpg
// ./images/Image138.jpg
// ./images/Image139.jpg
// ./images/Image140.jpg
// ./images/Image141.jpg
// ./images/Image142.jpg
// ./images/Image143.jpg
// ./images/Image144.jpg
// ./images/Image145.jpg
// ./images/Image146.jpg
// ./images/Image147.jpg
// ./images/Image148.jpg
// ./images/Image149.jpg
// ./images/Image150.jpg
// ./images/Image151.jpg
// ./images/Image152.jpg
// ./images/Image153.jpg
// ./images/Image154.jpg
// ./images/Image155.jpg
// ./images/Image156.jpg
// ./images/Image157.jpg
// ./images/Image158.jpg
// ./images/Image159.jpg
// ./images/Image160.jpg
// ./images/Image161.jpg
// ./images/Image162.jpg
// ./images/Image163.jpg
// ./images/Image164.jpg
// ./images/Image165.jpg
// ./images/Image166.jpg
// ./images/Image167.jpg
// ./images/Image168.jpg
// ./images/Image169.jpg
// ./images/Image170.jpg
// ./images/Image171.jpg
// ./images/Image172.jpg
// ./images/Image173.jpg
// ./images/Image174.jpg
// ./images/Image175.jpg
// ./images/Image176.jpg
// ./images/Image177.jpg
// ./images/Image178.jpg
// ./images/Image179.jpg
// ./images/Image180.jpg
// ./images/Image181.jpg

// ./images/Image182.jpg
// ./images/Image183.jpg
// ./images/Image184.jpg
// ./images/Image185.jpg
// ./images/Image186.jpg
// ./images/Image187.jpg
// ./images/Image188.jpg
// ./images/Image189.jpg
// ./images/Image190.jpg
// ./images/Image191.jpg
// ./images/Image192.jpg
// ./images/Image193.jpg
// ./images/Image194.jpg
// ./images/Image195.jpg
// ./images/Image196.jpg
// ./images/Image197.jpg
// ./images/Image198.jpg
// ./images/Image199.jpg
// ./images/Image200.jpg
// ./images/Image201.jpg
// ./images/Image202.jpg
// ./images/Image203.jpg
// ./images/Image204.jpg
// ./images/Image205.jpg
// ./images/Image206.jpg
// ./images/Image207.jpg
// ./images/Image208.jpg
// ./images/Image209.jpg
// ./images/Image210.jpg
// ./images/Image211.jpg
// ./images/Image212.jpg
// ./images/Image213.jpg
// ./images/Image214.jpg
// ./images/Image215.jpg
// ./images/Image216.jpg
// ./images/Image217.jpg
// ./images/Image218.jpg
// ./images/Image219.jpg
// ./images/Image220.jpg
// ./images/Image221.jpg
// ./images/Image222.jpg
// ./images/Image223.jpg
// ./images/Image224.jpg
// ./images/Image225.jpg
// ./images/Image226.jpg
// ./images/Image227.jpg
// ./images/Image228.jpg
// ./images/Image229.jpg
// ./images/Image230.jpg
// ./images/Image231.jpg
// ./images/Image232.jpg
// ./images/Image233.jpg
// ./images/Image234.jpg
// ./images/Image235.jpg
// ./images/Image236.jpg
// ./images/Image237.jpg
// ./images/Image238.jpg
// ./images/Image239.jpg
// ./images/Image240.jpg
// ./images/Image241.jpg
// ./images/Image242.jpg
// ./images/Image243.jpg
// ./images/Image244.jpg
// ./images/Image245.jpg
// ./images/Image246.jpg
// ./images/Image247.jpg
// ./images/Image248.jpg
// ./images/Image249.jpg
// ./images/Image250.jpg
// ./images/Image251.jpg
// ./images/Image252.jpg
// ./images/Image253.jpg
// ./images/Image254.jpg
// ./images/Image255.jpg
// ./images/Image256.jpg
// ./images/Image257.jpg
// ./images/Image258.jpg
// ./images/Image259.jpg
// ./images/Image260.jpg
// ./images/Image261.jpg
// ./images/Image262.jpg
// ./images/Image263.jpg
// ./images/Image264.jpg
// ./images/Image265.jpg
// ./images/Image266.jpg
// ./images/Image267.jpg
// ./images/Image268.jpg
// ./images/Image269.jpg
// ./images/Image270.jpg
// ./images/Image271.jpg
// ./images/Image272.jpg
// ./images/Image273.jpg
// ./images/Image274.jpg
// ./images/Image275.jpg
// ./images/Image276.jpg
// ./images/Image277.jpg
// ./images/Image278.jpg
// ./images/Image279.jpg
// ./images/Image280.jpg
// ./images/Image281.jpg
// ./images/Image282.jpg
// ./images/Image283.jpg
// ./images/Image284.jpg
// ./images/Image285.jpg
// ./images/Image286.jpg
// ./images/Image287.jpg
// ./images/Image288.jpg

// ./images/Image289.jpg
// ./images/Image290.jpg
// ./images/Image291.jpg
// ./images/Image292.jpg
// ./images/Image293.jpg
// ./images/Image294.jpg
// ./images/Image295.jpg
// ./images/Image296.jpg
// ./images/Image297.jpg
// ./images/Image298.jpg
// ./images/Image299.jpg
// ./images/Image300.jpg