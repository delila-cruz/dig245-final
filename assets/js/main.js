
/* javascript */
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

});

ScrollTrigger.create({
  trigger: ".metaphor",
  pin: true, 
  start: "top top", 
  end: "+=600", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".think",
  pin: true, 
  start: "top top", 
  end: "+=1250", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".invitation",
  pin: true, 
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".meet",
  pin: true, 
  start: "top top", 
  end: "+=600", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});


let mm = gsap.matchMedia();
mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
  trigger: ".user-stories",
  pin: true, 
  start: "top top", 
  end: "+=1000", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});
})

ScrollTrigger.create({
  trigger: ".expected",
  pin: true, 
  start: "top top", 
  end: "+=250", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});



ScrollTrigger.create({
  trigger: ".u-strug",
  pin: true, 
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".r-strug",
  pin: true, 
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".so-what",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".well-yes",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".however",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".gwe",
  pin: true,
  start: "top top", 
  end: "+=600", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".gawp",
  pin: true,
  start: "top top", 
  end: "+=600", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".children",
  pin: true,
  start: "top top", 
  end: "+=600", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".huh",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

let mm = gsap.matchMedia();
mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
  trigger: ".reprise",
  pin: true, 
  start: "top top", 
  end: "+=1000", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});
})

ScrollTrigger.create({
  trigger: ".different",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});

ScrollTrigger.create({
  trigger: ".chance",
  pin: true,
  start: "top top", 
  end: "+=500", 
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  }
});


