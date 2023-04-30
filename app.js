const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } 
    })
})

const hideElements = document.querySelectorAll('.table-body')
hideElements.forEach((el)=> observer.observe(el))