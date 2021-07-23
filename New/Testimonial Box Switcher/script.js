const testimonialContaner = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [


    {
        name: 'Ms Dhoni',
        position: 'Crickter',
        photo: 'https://i.pinimg.com/originals/1e/a3/c8/1ea3c8d857a5538900ebb4f6ce56f9e1.jpg' ,
        text: "Before going in I said, let’s first of all get rid of the feeling that it’s a 50 over game. It’s a 20-over game and we have seen in the IPL and in T20 formats, 130 runs can be a difficult target to achieve.", 

    },
    {
        name: 'Dr.A.P.J',
        position: 'Scientist',
        photo: 'https://i.pinimg.com/originals/e4/5c/e2/e45ce23f335f36efa7a058c682ecfeb3.jpg' ,
        text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.", 
    },
    {
        name: 'Swami vivekananda ',
        position: 'Monk',
        photo: 'https://i.pinimg.com/564x/c5/b1/c8/c5b1c82a2a055f1e3b7052379268c019.jpg' ,
        text: "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world", 
    },
    {
        name: 'Mahatma Gandhi',
        position: 'Freedom Fighter',
        photo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/cb/16/c2/cb16c274-bfca-6e7e-1ade-1e38de81c6b2/source/512x512bb.jpg' ,
        text: "If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. We need not wait to see what others do.", 
    }
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    
    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
  