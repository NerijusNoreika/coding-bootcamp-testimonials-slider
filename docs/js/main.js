
  let vue = Vue.createApp({
    data() {
      return {
        index: 0,
        authors: [
            {
                'text':  `“ I’ve been interested in coding for a while but never taken the jump, until now. 
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                excited about the future. ”`,
                'author': 'Tanya Sinclair',
                'profession': 'UX Engineer',
                'img': './img/image-tanya.jpg'
            },
            {
                'text':  `“ If you want to lay the best foundation possible I’d recommend taking this course. 
                The depth the instructors go into is incredible. I now feel so confident about 
                starting up as a professional developer. ”`,
                'author': 'John Tarkpor',
                'profession': 'Junior Front-end Developer',
                'img': './img/image-john.jpg'
            }
        ]
      }
    },
    methods: {
      next() {
         this.index = (this.index + 1) % this.authors.length;
      },
      prev() {
       this.index = Math.abs((this.index - 1) % this.authors.length);
      }
   },
    mounted() {
      window.addEventListener('keydown', function(e) {
        switch(e.code) {
          case 'ArrowRight':
            vue.next();
            break;
          case 'ArrowLeft':
            vue.prev();
            break;
          default:
            break;
        }
      });
    },
  }).mount('#app')