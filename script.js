const slider = new Vue({
    el: '#root',
    data: {
        activeIndex: 0,
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
        ]
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
        if (this.activeIndex == this.slides.length){
            this.activeIndex = 0;
        }
    },
    thisActive(index){
        this.activeIndex = index;
    },
},
mounted(){
    console.log('ciao')
    setInterval(this.nextSlide, 3000);
}
})