const testimonials = [
    {
      name: "Blinni D",
      photoUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      text: "Apple saved my business. I wish I would have thought of it first. We can't understand how we've been living without apple. Apple was the best investment I ever made.",
    },
    {
      name: "Juliette P",
      photoUrl:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      text: "I will recommend you to my colleagues. World peace has really helped our business. World peace is exactly what our business has been lacking.",
    },
    {
      name: "Devonne R",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      text: "We can't understand how we've been living without fitness. I made back the purchase price in just 48 hours! I will let my mum know about this, she could really make use of fitness!",
    },
  ];
  
  const imgEl = document.querySelector(".testimonial-container1 img");
  const textEl = document.querySelector(".text");
  const userEl = document.querySelector(".username");
  
  let idx = 0;
  
  updateTestimonial();
  
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 5000);
  }
  