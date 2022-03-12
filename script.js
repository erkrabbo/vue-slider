const slider = new Vue({
    el: '#root',
    data: {
        activeIndex: 0,
        startTime: 0,
        slideTimer : 0,
        slides: [
            {
                img: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                img: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                img: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                img: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                img: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
},
methods:{
    prevSlide(){
        this.activeIndex--;
        if (this.activeIndex < 0){
            this.activeIndex = this.slides.length - 1;
        }
    },
    nextSlide(){
        this.activeIndex++;
        this. startTime = new Date();
        if (this.activeIndex == this.slides.length){
            this.activeIndex = 0;
        }
    },
    thisActive(index){
        this.activeIndex = index;
    },
    playAutoSliding(){
        let intervalTime = 3000;
        let resumeTime = 0;
        let state = 0;
        this.startTime = new Date();
        this.slideTimer = setInterval(this.nextSlide, intervalTime);
        console.log(this.startTime, resumeTime, state)
        state = 1;

        this.pauseAutoSliding = function (){
            if (state != 1){
                return;
            }
            resumeTime = (intervalTime - (new Date() - this.startTime));
    
            clearInterval(this.slideTimer);
            console.log(this.startTime, resumeTime, state)
            state = 2;
        }
        this.timeoutCallback = function (){
            if (state != 3){
                return;
            }
            slider.nextSlide();
    
            this.startTime = new Date();
            slider.playAutoSliding();
            console.log(this.startTime, resumeTime, state)
            state = 1
        }
        this.resumeAutoSliding = function (){
            if (state != 2){
                return;
            }
            console.log(this.startTime, resumeTime, state)
            state = 3;
            setTimeout(this.timeoutCallback, resumeTime);
        }
    },
},
mounted(){
    this.playAutoSliding();
}
})