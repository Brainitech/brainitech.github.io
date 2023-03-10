var loaded = document.getElementById("preloader");

window.addEventListener("load", function(){
    loaded.classList.add("fade-out");
    this.setTimeout(() => {
        loaded.style.display = "none";
    }, 1000)
})

var postload = document.getElementById("post-pre");

window.onload = function () {
    setTimeout(appeardiv, 1000);
}

function appeardiv() {
    postload.style.display = "block";
}

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'I am Brainiac',
    'I am a Student',
    'I am a Programmer',
    'I am a Gamer',
    'I am Everywhere',
    'Samhit is GAY',
    ]
  
  const el = document.querySelector('.Greeting')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1000)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentScroll = window.scrollY;
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const nextSectionTop = index < sections.length - 1 ? sections[index + 1].offsetTop : Infinity;
        if (currentScroll >= sectionTop && currentScroll < nextSectionTop) {
            currentSectionIndex = index + 1;
        }
    });

    navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
    });

    const activeNav = navLinks[currentSectionIndex];
    activeNav.classList.add('active');
});
