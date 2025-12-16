
/* javascript */
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

});

ScrollTrigger.create({
  trigger: ".metaphor",
  pin: true, // pin the trigger element while active
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=600", // end after scrolling 500px beyond the start
  // endTrigger: 'box3D',
  // end: 'bottom 50%+=100px',
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
  pin: true, // pin the trigger element while active
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=1250", // end after scrolling 500px beyond the start
  // endTrigger: 'box3D',
  // end: 'bottom 50%+=100px',
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
  pin: true, // pin the trigger element while active
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=500", // end after scrolling 500px beyond the start
  // endTrigger: 'box3D',
  // end: 'bottom 50%+=100px',
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
  pin: true, // pin the trigger element while active
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=600", // end after scrolling 500px beyond the start
  // endTrigger: 'box3D',
  // end: 'bottom 50%+=100px',
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
  trigger: ".user-stories",
  pin: true, // pin the trigger element while active
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=1600", // end after scrolling 500px beyond the start
  endTrigger: "expected",
  // end: 'bottom 50%+=100px',
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
  trigger: ".expected",
  pin: true, // pin the trigger element while active
  start: "top .user-stories", // when the top of the trigger hits the top of the viewport
  end: "+=500", // end after scrolling 500px beyond the start
  // endTrigger: ".expected",
  // end: 'bottom 50%+=100px',
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